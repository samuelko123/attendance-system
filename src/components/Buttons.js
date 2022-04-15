import React from 'react'
import { Button } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import AddIcon from '@mui/icons-material/Add'
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'
import DescriptionIcon from '@mui/icons-material/Description'

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