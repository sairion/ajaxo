// Error type predicate filter.
export function isAPIResponse (xhr) {
    return typeof xhr === 'object' && typeof xhr.status === 'number';
}

export function isAPIResponseStatus (statusCode) {
    return function (xhr) {
        return isAPIResponse(xhr) && xhr.status === statusCode;
    };
}
