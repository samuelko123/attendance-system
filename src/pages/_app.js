import React from 'react'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'

import { ThemeProvider } from '@mui/material/styles'
import {
	Box,
	Drawer,
	Toolbar,
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import GroupIcon from '@mui/icons-material/Group'
import { MenuList } from '../components/MenuList'
import { AppBar } from '../components/AppBar'
import { Main } from '../components/Main'
import { theme } from '../styles/theme'
import '../styles/global.css'

const menuItems = [
	{
		href: '/',
		label: 'Home',
		icon: <HomeIcon />,
	},
	{
		href: '/groups',
		label: 'Group',
		icon: <GroupIcon />,
	},
]

export default function App(props) {
	const {
		Component,
		pageProps: {
			session,
			...pageProps
		},
	} = props

	const [drawerOpen, setDrawerOpen] = React.useState(false)
	const toggleDrawerOpen = () => { setDrawerOpen(!drawerOpen) }

	return (
		<SessionProvider session={session}>
			<ThemeProvider theme={theme}>
				<Head>
					<title>{process.env.NEXT_PUBLIC_APP_TITLE}</title>
					<link rel='icon' href='/favicon.ico' />
				</Head>
				<AppBar
					title={process.env.NEXT_PUBLIC_APP_TITLE}
					onClickMenuButton={toggleDrawerOpen}
				/>
				<Box sx={{ display: 'flex' }}>
					<Drawer
						variant='persistent'
						open={drawerOpen}
						sx={{
							flexShrink: 0,
							width: theme.spacing(theme.custom.drawerWidth),
							[`& .MuiDrawer-paper`]: {
								width: theme.spacing(theme.custom.drawerWidth),
							},
						}}
					>
						<Toolbar />
						<MenuList
							items={menuItems}
							onSelect={() => setDrawerOpen(false)}
						/>
					</Drawer>
					<Main open={drawerOpen}>
						<Toolbar />
						<Component {...pageProps} />
					</Main>
				</Box>
			</ThemeProvider>
		</SessionProvider>
	)
}
