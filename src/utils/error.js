export class UnAuthorizedError extends Error {
	constructor() {
		super('Unauthorized')
		this.status = 401
	}
}

export class NotFoundError extends Error {
	constructor() {
		super('Not Found')
		this.status = 404
	}
}