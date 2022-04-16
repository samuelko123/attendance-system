import React from 'react'
import {
	Button,
	Typography,
} from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import AddIcon from '@mui/icons-material/Add'
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'
import DescriptionIcon from '@mui/icons-material/Description'
import LogoutIcon from '@mui/icons-material/Logout'

export const BackButton = React.forwardRef((props, ref) => {
	return (
		<Button
			variant='contained'
			size='small'
			color='primary'
			startIcon={<ArrowBackIosNewIcon />}
			ref={ref}
			{...props}
		>
			Back
		</Button>
	)
})

export const CreateButton = React.forwardRef((props, ref) => {
	return (
		<LoadingButton
			variant='contained'
			size='small'
			color='success'
			startIcon={<AddIcon />}
			ref={ref}
			{...props}
		>
			Create
		</LoadingButton>
	)
})

export const SaveButton = React.forwardRef((props, ref) => {
	return (
		<LoadingButton
			variant='contained'
			size='small'
			startIcon={<SaveIcon />}
			ref={ref}
			{...props}
		>
			Save
		</LoadingButton>
	)
})

export const DeleteButton = React.forwardRef((props, ref) => {
	return (
		<LoadingButton
			variant='contained'
			size='small'
			color='error'
			startIcon={<DeleteIcon />}
			ref={ref}
			{...props}
		>
			Delete
		</LoadingButton>
	)
})

export const DetailButton = React.forwardRef((props, ref) => {
	return (
		<LoadingButton
			variant='contained'
			size='small'
			startIcon={<DescriptionIcon />}
			ref={ref}
			{...props}
		>
			Detail
		</LoadingButton>
	)
})

export const SignoutButton = React.forwardRef((props, ref) => {
	return (
		<Button
			variant='outlined'
			size='small'
			startIcon={<LogoutIcon />}
			ref={ref}
			{...props}
		>
			Sign Out
		</Button>
	)
})

export const GoogleSignInButton = (props) => {
	const { onClick } = props

	return (
		<Button
			variant='contained'
			onClick={onClick}
			sx={{
				backgroundColor: '#4285F4',
				padding: 0,
				textTransform: 'none',
			}}

		>
			<img src='/google.svg' />
			<Typography
				sx={{
					padding: 1,
				}}
			>
				Sign in with Google
			</Typography>
		</Button>
	)
}