export class PromiseNullError extends Error {
    constructor (message) {
        super();
        this.message = message || null;
    }
}

export class UnresolvedIdentityError extends Error {
    constructor (message) {
        super();
        this.message = message || null;
    }
}
