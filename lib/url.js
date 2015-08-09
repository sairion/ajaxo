import _ from 'lodash';

import { UnresolvedIdentityError } from './exceptions';


export function resolveURL ({ identity, url }) {
    // given url pattern '/hello/<%- id %>/dello' and identity `{ id : 1 }`
    // this returns resolved url '/hello/1/dello'

    // If lacks template pattern, assume it is just a plain url and return it.
    if (!_.contains(url, '<%')) {
        return url;
    }

    // If url contains template string, try resolving identity.
    // If it lacks identity, throw `UnresolvedIdentityError`.
    // TODO: customizable key arguments
    if (identity != null) {
        var resolver = _.template(url);
        return _.isNumber(identity) ? resolver({ id: identity }) :
                                      resolver(identity);
    } else {
        throw new UnresolvedIdentityError('Identity needs to be resolved');
    }
}
