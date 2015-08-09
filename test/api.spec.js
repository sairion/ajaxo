import {assert} from 'chai';
import {APIBase, APIBuilder} from '../lib/index';


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

    var definitions = {
        report: {
            url: '/report/<%= id %>',
            type: 'POST',
        }
    };

    var fakeServer = sinon.fakeServer.create();
    var API = APIBuilder(definitions);

    afterEach(() => {
        fakeServer.restore();
    });

    it('should make correct ajax request', function () {
        var expected = { 'ajaxo_is': 'awesome' };
        fakeServer.respondWith(
            'POST',
            /\/report\/(\d+)/,
            [
                200,
                { "Content-Type": "application/json" },
                JSON.stringify(expected)
            ]
        );
        var promise = API.report().resolveWith({ id: 1 }).post();
        fakeServer.respond();

        return promise.then(response => {
            assert.deepEqual(response, expected);
        });
    });
});
