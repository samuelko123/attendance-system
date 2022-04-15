import React from 'react'
import { Controller } from 'react-hook-form'
import { TextField } from '@mui/material'

export const TextFieldController = (props) => {
	const {
		label,
		...controllerProps
	} = props

	return (
		<Controller
			render={({
				field: {
					onChange,
					value,
				},
				fieldState: { error },
			}) => (
				<TextField
					label={label}
					variant='outlined'
					size='small'
					fullWidth
					value={value}
					onChange={onChange}
					error={!!error}
					helperText={error ? error.message : null}
					inputProps={{
						autoComplete: 'new-password',
					}}
				/>
			)}
			{...controllerProps}
		/>
	)
}