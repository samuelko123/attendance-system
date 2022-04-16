export const handleApiError = (err, res) => {
	const status = err.status || 500
	res.status(status).send(err.message)
}