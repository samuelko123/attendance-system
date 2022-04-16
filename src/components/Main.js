import { styled } from '@mui/material/styles'

export const Main = styled('main')(
	({
		theme,
		open,
	}) => ({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		gap: theme.spacing(3),
		paddingLeft: theme.spacing(3),

		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),

		marginLeft: theme.spacing(theme.custom.drawerWidth * -1),
		...(open && {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	}),
)