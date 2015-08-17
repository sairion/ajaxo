import config from './config';

// TODO: Remove jQuery deps.
export default function request (opts) {
    return config.fetch(opts.url, opts);
}
