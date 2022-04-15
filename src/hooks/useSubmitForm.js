import React from 'react'
import axios from 'axios'

export const useSubmitForm = (url, method, onSuccess) => {
	const [isSubmitting, setSubmitting] = React.useState(false)
	const [isSuccess, setSucess] = React.useState(false)
	const [errMsg, setErrMsg] = React.useState(null)

	const onSubmit = async (data) => {
		try {
			setSubmitting(true)
			setErrMsg(null)
			setSucess(false)
			await axios.request({
				url,
				method,
				data,
			})
			setSucess(true)
			if (onSuccess) {
				onSuccess()
			}
		} catch (err) {
			if (err.response && err.response.data) {
				setErrMsg(`Error: ${err.response.data}`)
			} else {
				setErrMsg(err.toString())
			}
		} finally {
			setSubmitting(false)
		}
	}

	return [onSubmit, isSubmitting, isSuccess, errMsg]
}