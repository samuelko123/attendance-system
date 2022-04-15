import React from 'react'
import { Stack } from '@mui/material'

export const Form = (props) => {
	const {
		children,
		onSubmit,
	} = props

	return (
		<Stack
			component='form'
			onSubmit={onSubmit}
			spacing={2}
			sx={{
				alignItems: 'flex-start',
			}}
		>
			{children}
		</Stack>
	)
}