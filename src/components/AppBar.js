import React from 'react'
import {
	signOut,
	useSession,
} from 'next-auth/react'
import {
	Avatar,
	IconButton,
	AppBar as MuiAppBar,
	Popover,
	Stack,
	Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from './Link'
import { SignoutButton } from './Buttons'

export const AppBar = (props) => {
	const {
		title,
		onClickMenuButton,
	} = props

	const [popOverAnchor, setPopOverAnchor] = React.useState(null)
	const popOverOpen = Boolean(popOverAnchor)

	const { data: session } = useSession()

	return (
		<MuiAppBar
			position='fixed'
			elevation={2}
			sx={{
				zIndex: (theme) => theme.zIndex.drawer + 1,
				padding: (theme) => theme.spacing(1),
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}
		>
			<Stack
				direction='row'
				alignItems='center'
			>
				<IconButton
					size='large'
					onClick={onClickMenuButton}
					color='inherit'
				>
					<MenuIcon />
				</IconButton>
				<Link href='/'>
					<Typography
						variant='h6'
						component='h6'
						noWrap
						sx={{ cursor: 'pointer' }}
					>
						{title}
					</Typography>
				</Link>
			</Stack>

			{session &&
				<>
					<IconButton
						onClick={(e) => setPopOverAnchor(e.currentTarget)}
					>
						<Avatar
							src={session.user.image}
							imgProps={{
								referrerPolicy: 'no-referrer',
							}}
						/>
					</IconButton>
					<Popover
						open={popOverOpen}
						anchorEl={popOverAnchor}
						onClose={() => setPopOverAnchor(null)}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'left',
						}}
					>
						<Stack
							direction='column'
							spacing={2}
							sx={{ p: 2 }}
						>
							<Typography>{session.user.email}</Typography>
							<SignoutButton
								onClick={() => signOut()}
							/>
						</Stack>
					</Popover>
				</>
			}
		</MuiAppBar>
	)
}