import { MongoClient } from 'mongodb'

const uri = process.env.MONGO_URI
const dbName = process.env.MONGO_DB

let cachedClient = null
let cachedDb = null

export async function connectToDatabase() {
	if (!cachedClient || !cachedDb) {
		const client = await MongoClient.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})

		const db = await client.db(dbName)

		cachedClient = client
		cachedDb = db
	}

	return {
		client: cachedClient,
		db: cachedDb,
	}
}

export function convertMongoIdToStr(obj) {
	if (!obj) {
		return obj
	} else if (Array.isArray(obj)) {
		for (const doc of obj) {
			doc._id = doc._id.toString()
		}
	} else if ('_id' in obj) {
		obj._id = obj._id.toString()
	}

	return obj
}

export const clientPromise = MongoClient.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})