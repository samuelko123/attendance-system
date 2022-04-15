import React from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import {
	Alert,
	Box,
} from '@mui/material'
import { getGroup } from '../api/groups/[id]'
import { DeleteDialog } from '../../components/Dialogs'
import {
	BackButton,
	DeleteButton,
	SaveButton,
} from '../../components/Buttons'
import { Link } from '../../components/Link'
import { Form } from '../../components/Form'
import { TextFieldController } from '../../components/FormControllers'
import { useSubmitForm } from '../../hooks/useSubmitForm'

export default function Page(props) {
	const { group } = props

	const [openModal, setOpenModal] = React.useState(false)

	const router = useRouter()
	const {
		handleSubmit,
		control,
	} = useForm()
	const [onUpdate, isUpdating, isUpdateSuccess, updateErrMsg] = useSubmitForm(`/api/groups/${group._id}`, 'PATCH')
	const [onDelete, isDeleting, isDeleteSuccess, deleteErrMsg] = useSubmitForm(`/api/groups/${group._id}`, 'DELETE', () => { router.push('./') })

	const handleDelete = async () => {
		await onDelete()
	}

	return (
		<>
			<Link href='./'>
				<BackButton />
			</Link>
			<Form onSubmit={handleSubmit(onUpdate)}>
				<TextFieldController
					name='name'
					label='Name'
					control={control}
					defaultValue={group.name}
					rules={{ required: 'Name cannot be blank' }}
				/>
				<Box
					sx={{
						display: 'flex',
						gap: 2,
					}}
				>
					<SaveButton
						type='submit'
						loading={isUpdating}
					/>
					<DeleteButton
						loading={isDeleting}
						onClick={() => { setOpenModal(true) }}
					/>
					<DeleteDialog
						onConfirm={handleDelete}
						open={openModal}
						handleClose={() => { setOpenModal(false) }}
					/>
				</Box>
			</Form>
			{
				isUpdateSuccess &&
				<Alert severity='success'>
					Updated successfully
				</Alert>
			}
			{
				updateErrMsg &&
				<Alert severity='error'>
					{updateErrMsg}
				</Alert>
			}
			{
				isDeleteSuccess &&
				<Alert severity='success'>
					Deleted successfully
				</Alert>
			}
			{
				deleteErrMsg &&
				<Alert severity='error'>
					{deleteErrMsg}
				</Alert>
			}
		</>
	)
}

export async function getServerSideProps(context) {
	const { id } = context.params

	const data = await getGroup(id)

	if (!data) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			group: data,
		},
	}
}