import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import {
	Alert,
	CircularProgress,
	Typography,
} from '@mui/material'
import { Link } from './Link'

export const Auth = (props) => {
	const { children } = props

	const router = useRouter()

	const {
		status,
		data: session,
	} = useSession()

	if (status === 'loading') {
		return <CircularProgress />
	}

	if (!session && router.pathname !== '/') {
		return (
			<Alert severity='error'>
				<Typography component='span'>Please </Typography>
				<Link href='/'>
					<Typography
						component='span'
						variant='link'
					>
                        sign in
					</Typography>
				</Link>
				<Typography component='span'> to continue</Typography>
			</Alert>
		)
	}

	return children
}
