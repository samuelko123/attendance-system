import React from 'react'
import Head from 'next/head'

import { styled } from '@mui/material/styles'
import {
	AppBar,
	Box,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import GroupIcon from '@mui/icons-material/Group'
import '../styles/global.css'
import { Link } from '../components/Link'

const drawerWidth = 160

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
	({
		theme,
		open,
	}) => ({
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	}),
)

export default function App(props) {
	const {
		Component,
		pageProps,
	} = props

	const [drawerOpen, setDrawerOpen] = React.useState(false)
	const toggleDrawerOpen = () => { setDrawerOpen(!drawerOpen) }

	return (
		<>
			<Head>
				<title>{process.env.NEXT_PUBLIC_APP_TITLE}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<AppBar
				position='fixed'
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
			>
				<Toolbar disableGutters>
					<Box>
						<IconButton
							size='large'
							onClick={toggleDrawerOpen}
							color='inherit'
						>
							<MenuIcon />
						</IconButton>
					</Box>
					<Link href='/'>
						<Typography
							variant='h6'
							component='h6'
							noWrap
							sx={{ cursor: 'pointer' }}
						>
							{process.env.NEXT_PUBLIC_APP_TITLE}
						</Typography>
					</Link>
				</Toolbar>
			</AppBar>
			<Box sx={{ display: 'flex' }}>
				<Drawer
					variant='persistent'
					open={drawerOpen}
					sx={{
						width: drawerWidth,
						flexShrink: 0,
						[`& .MuiDrawer-paper`]: {
							width: drawerWidth,
						},
					}}
				>
					<Toolbar />
					<Box sx={{ overflow: 'auto' }}>
						<List disablePadding={true}>
							<Link href='/groups'>
								<ListItem
									button
									onClick={() => setDrawerOpen(false)}
								>
									<ListItemIcon>
										<GroupIcon />
									</ListItemIcon>
									<ListItemText
										primary='Group'
									/>
								</ListItem>
							</Link>
						</List>
					</Box>
				</Drawer>
				<Main
					open={drawerOpen}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'flex-start',
						alignItems: 'flex-start',
						gap: 3,
						pl: 3,
					}}
				>
					<Toolbar />
					<Component {...pageProps} />
				</Main>
			</Box>
		</>
	)
}
