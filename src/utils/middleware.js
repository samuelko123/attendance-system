import { getSession } from 'next-auth/react'
import { UnAuthorizedError } from './error'

export const checkUserOnly = async (req) => {
	const session = await getSession({ req })

	if (!session) {
		throw new UnAuthorizedError()
	}
}