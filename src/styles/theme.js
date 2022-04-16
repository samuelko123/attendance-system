import { createTheme } from '@mui/material/styles'

let theme = createTheme({
	custom: {
		drawerWidth: 16,
	},
})

theme = createTheme(theme, {
	typography: {
		link: {
			color: theme.palette.primary.main,
			textDecoration: 'underline',
		},
	},
})

export { theme }