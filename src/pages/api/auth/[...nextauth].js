import NextAuth from 'next-auth'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import FacebookProvider from "next-auth/providers/facebook"
import GoogleProvider from 'next-auth/providers/google'
import { clientPromise } from '../../../utils/mongo'

export default NextAuth({
	adapter: MongoDBAdapter(clientPromise),
	providers: [
		FacebookProvider({
			clientId: process.env.FACEBOOK_CLIENT_ID,
			clientSecret: process.env.FACEBOOK_CLIENT_SECRET
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
})