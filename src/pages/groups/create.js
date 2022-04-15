import React from 'react'
import { useForm } from 'react-hook-form'
import { Alert } from '@mui/material'

import { useSubmitForm } from '../../hooks/useSubmitForm'
import {
	BackButton,
	CreateButton,
} from '../../components/Buttons'
import { Form } from '../../components/Form'
import { TextFieldController } from '../../components/FormControllers'
import { Link } from '../../components/Link'

export default function Page() {
	const {
		handleSubmit,
		control,
		reset,
	} = useForm()

	const [onSubmit, isSubmitting, isSuccess, errMsg] = useSubmitForm('/api/groups/', 'POST', reset)

	return (
		<>
			<Link href='./'>
				<BackButton />
			</Link>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<TextFieldController
					name='name'
					label='Name'
					control={control}
					defaultValue=''
					rules={{ required: 'Name cannot be blank' }}
				/>
				<CreateButton
					type='submit'
					loading={isSubmitting}
				/>
			</Form>
			{isSuccess &&
				<Alert severity='success'>
					Created successfully
				</Alert>
			}
			{errMsg &&
				<Alert severity='error'>
					{errMsg}
				</Alert>
			}
		</>
	)
}