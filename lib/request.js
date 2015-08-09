import $ from 'jquery';

// TODO: Remove jQuery deps.
export default function request (opts) {
    return $.ajax(opts.url, opts);
}
