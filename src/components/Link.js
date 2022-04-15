import NextLink from 'next/link'

// Note: It prevents "Prop 'href' did not match" error
export const Link = (props) => {
	const {
		href,
		children,
	} = props

	return (
		<NextLink href={href}>
			<a href={href}>
				{children}
			</a>
		</NextLink>
	)
}