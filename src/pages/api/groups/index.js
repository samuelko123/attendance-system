import {
	connectToDatabase,
	convertMongoIdToStr,
} from '../../../utils/mongo'
import { checkUserOnly } from '../../../utils/middleware'
import { handleApiError } from '../../../utils/errorHandler'
import { NotFoundError } from '../../../utils/error'

export default async function handler(req, res) {
	try {
		await checkUserOnly(req)

		if (req.method === 'GET') {
			const data = await getGroups()
			res.json(data)
		} else if (req.method === 'POST') {
			const data = await createGroup(req.body)
			res.status(200).send(data)
		} else {
			throw new NotFoundError()
		}
	} catch (err) {
		handleApiError(err, res)
	}
}

export async function getGroups() {
	const { db } = await connectToDatabase()

	const data = await db
		.collection('groups')
		.find({})
		.collation({ locale: 'en' })
		.sort({ name: 1 })
		.toArray()

	return convertMongoIdToStr(data)
}

export async function createGroup(doc) {
	const { db } = await connectToDatabase()

	const data = await db
		.collection('groups')
		.insertOne(doc)

	return convertMongoIdToStr(data)
}