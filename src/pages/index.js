import { Typography } from '@mui/material'
import React from 'react'

export default function Page() {

	return (
		<Typography
			variant='h6'
			component='h6'
		>
			Welcome to {process.env.NEXT_PUBLIC_APP_TITLE}!
		</Typography>
	)
}