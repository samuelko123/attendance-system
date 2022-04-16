import React from 'react'
import {
	signIn,
	useSession,
} from 'next-auth/react'
import {
	Stack,
	Typography,
} from '@mui/material'
import { GoogleSignInButton } from '../components/Buttons'

export default function Page() {
	const { data: session } = useSession()

	return (
		<>
			<Typography
				variant='h6'
				component='h6'
			>
				Welcome to {process.env.NEXT_PUBLIC_APP_TITLE}!
			</Typography>
			{session &&
				<Typography
					variant='p'
					component='p'
				>
					You are signed in as {session.user.email}
				</Typography>
			}
			{!session &&
				<Stack spacing={2}>
					<GoogleSignInButton onClick={() => signIn('google')} />
				</Stack>
			}
		</>
	)
}