import { ObjectId } from 'mongodb'
import {
	connectToDatabase,
	convertMongoIdToStr,
} from '../../../utils/mongo'
import { checkUserOnly } from '../../../utils/middleware'
import { handleApiError } from '../../../utils/errorHandler'
import { NotFoundError } from '../../../utils/error'

export default async function handler(req, res) {
	try {
		await checkUserOnly(req, res)

		if (req.method === 'GET') {
			const { id } = req.query
			const data = await getGroup(id)
			res.json(data)
		} else if (req.method === 'PATCH') {
			const { id } = req.query
			const data = await updateGroup(id, req.body)
			res.json(data)
		} else if (req.method === 'DELETE') {
			const { id } = req.query
			const data = await deleteGroup(id)
			res.json(data)
		} else {
			throw new NotFoundError()
		}
	} catch (err) {
		handleApiError(err, res)
	}
}

export async function getGroup(id) {
	const { db } = await connectToDatabase()

	const data = await db
		.collection('groups')
		.findOne({ _id: ObjectId(id) })

	return convertMongoIdToStr(data)
}

export async function updateGroup(id, doc) {
	const { db } = await connectToDatabase()

	const data = await db
		.collection('groups')
		.updateOne({ _id: ObjectId(id) }, { $set: doc })

	return convertMongoIdToStr(data)
}

export async function deleteGroup(id) {
	const { db } = await connectToDatabase()

	const data = await db
		.collection('groups')
		.deleteOne({ _id: ObjectId(id) })

	return convertMongoIdToStr(data)
}