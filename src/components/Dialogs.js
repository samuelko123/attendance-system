import React from 'react'
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material'
import { DeleteButton } from './Buttons'

export const DeleteDialog = (props) => {
	const {
		onConfirm,
		open,
		handleClose,
	} = props

	const handleConfirm = () => {
		handleClose()
		onConfirm()
	}

	return (
		<Dialog
			open={open}
			onClose={handleClose}
		>
			<DialogTitle>
				Delete
			</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Are you sure you want to delete?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>
					Cancel
				</Button>
				<DeleteButton onClick={handleConfirm} />
			</DialogActions>
		</Dialog>
	)
}
