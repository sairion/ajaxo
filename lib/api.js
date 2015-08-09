import _ from 'lodash';

import { NullPromiseConstructorError } from './exceptions';

// TODO: Flow annotations
// TODO: Babel-ESlint
// TODO: Reduce or remove lodash deps

var methods = {
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    delete: 'DELETE',
};

export var config = {
    PromiseConstructor: global.Promise || null
};

export class APIBase {
    constructor (definition, options) {
        // TODO: re-implement jQuery-specific options when jQuery is gone.
        this.options = _.extend({
                json: true,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: {},
                identity: null,
            },
            definition,
            options
        );
    }

    // If non-allowed method has passed, throw `TypeError`.
    checkMethodConstraints (type) {
        if (!_.contains(this.options.type, type)) {
            throw new TypeError(`${type} is not allowed method.`);
        }
    }

    // Assign payload
    data (data) {
        _.extend(this.options.data, data);
        return this;
    }

    // Resolve dynamic url by providing identity object.
    // TODO: Implement identity auto-detection
    // TODO: customizable key arguments
    resolveIdentity (identity) {
        this.options.identity = identity;
        return this;
    }

    // Where real request stuff happens.
    sync (overrides) {
        if (config.PromiseConstructor == null) {
            throw new NullPromiseConstructorError(
                `global Promise Constructor does not exist.
                 You need to override config.PromiseConstructor manually or
                 include Promise shim.`
            );
        }
        var opts = _.extend(this.options, overrides);

        if (opts.type) {
            this.checkMethodConstraints.call(this, opts.type);
        }

        opts.url = resolveURL(opts);

        if (opts.json && opts.type !== methods.get) {
            opts.data = JSON.stringify(opts.data);
        }

        // TODO: re-implement jQuery-specific options when jQuery is gone.
        return new config.PromiseConstructor(function (resolve, reject) {
            request(_.extend(opts, {
                success: function (data) {
                    resolve(data);
                },
                error: function (xhr, textStatus, errorThrown) {
                    reject(xhr, textStatus, errorThrown);
                },
            }));
        });
    }

    get (overrides) {
        return this.send.call(this, methods.get, overrides);
    }

    post (overrides) {
        return this.send.call(this, methods.post, overrides);
    }

    put (overrides) {
        return this.send.call(this, methods.put, overrides);
    }

    delete (overrides) {
        return this.send.call(this, methods.delete, overrides);
    }

    send (methodName, overrides) {
        return this.sync.call(this, _.extend({}, overrides, { type: methodName }));
    }
}

// TODO: UUID-like identifiable tag for debugging requests
export function APIInit (APIDefinition, options) {
    return new APIBase(APIDefinition, options);
}

export function APIBuilder (APIDefinitions) {
    var APIBundle = {};
    _.each(APIDefinitions, (APIDefinition, APIKey) => {
        APIBundle[APIKey] = APIInit.bind(null, APIDefinition);
    });
    return APIBundle;
}
