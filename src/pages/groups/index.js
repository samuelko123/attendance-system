import React from 'react'

import { useRouter } from 'next/router'
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material'

import { getGroups } from '../api/groups'
import {
	CreateButton,
	DetailButton,
} from '../../components/Buttons'
import { Link } from '../../components/Link'

export default function Page(props) {
	const { groups } = props

	const router = useRouter()

	return (
		<>
			<Link href={`${router.pathname}/create`}>
				<CreateButton />
			</Link>
			<TableContainer>
				<Table size='small'>
					<TableHead>
						<TableRow
							sx={{
								fontWeight: 'bold',
							}}
						>
							{
								['Name', 'Action'].map(field =>
									<TableCell key={field}>
										{field}
									</TableCell>
								)
							}
						</TableRow>
					</TableHead>
					<TableBody>
						{groups.map((group, index) => (
							<TableRow key={index}>
								<TableCell>
									{group.name}
								</TableCell>
								<TableCell>
									<Link href={`${router.pathname}/${group._id}`}>
										<DetailButton />
									</Link>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}

export async function getServerSideProps() {
	const data = await getGroups()

	return {
		props: {
			groups: data,
		},
	}
}