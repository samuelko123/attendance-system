import {
	connectToDatabase,
	convertMongoIdToStr,
} from '../../../utils/mongo'

export default async function handler(req, res) {
	try {
		if (req.method === 'GET') {
			const data = await getGroups()
			res.json(data)
		} else if (req.method === 'POST') {
			const data = await createGroup(req.body)
			res.status(200).send(data)
		} else {
			res.status(404).send()
		}
	} catch (err) {
		res.status(500).send(err.message)
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