import fetch from 'node-fetch';

export default {
    Promise: global.Promise || null,
    fetch: global.fetch || fetch,
};
