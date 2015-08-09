import {assert} from 'chai';
import {APIBase, APIBuilder} from '../lib/index';

var definitions = {
    report: {
        url: '/report/<%= id %>',
        type: 'POST',
    }
};

describe('APIBase', function () {
    it('should initialize with given options', function () {
        var options = {
            a: 1,
            b: 'hello',
            c: {}
        };
        var API = new APIBase({}, options);

        assert.equal(options.a, API.options.a);
        assert.equal(options.b, API.options.b);
        assert.equal(options.c, API.options.c);
    });
});

describe('APIBuilder', function () {
    var API = APIBuilder(definitions);
});
