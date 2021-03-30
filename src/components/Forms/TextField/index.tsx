// eslint-disable-next-line no-use-before-define
import React from 'react'
import styled from 'styled-components'
import Text from '../../foundation/Text'
interface IInput {
	placeholder: string;
	name: string;
	type?: string;
	value: string;
	children?: string;
	isTouched?: boolean;
	error?: string;
	onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}
const InputWrapper = styled.div`
	margin-bottom: 17px;
`

const Input = styled.input`
	width: 100%;
	border: 1px solid ${({ theme }) => theme.colors.tertiary.light.colors};
	padding: 12px 16px;
	outline: 0;
	border-radius: ${({ theme }) => theme.borderRadius};
`
export default function TextField ({
  isTouched, placeholder,
  error,
  name,
  value,
  ...props
}: IInput) {
  const hasError = Boolean(error)
  const isFieldInvalid = hasError && isTouched
  return (
		<InputWrapper>
			<Input
				placeholder={placeholder}
				name={name}
				value={value}
				{...props}
			/>

			{isFieldInvalid &&
				<Text
					variant='smallestException'
					color='error.main'
					// role='alert'
				>
					{error}
				</Text>
			}

		</InputWrapper>
  )
}

TextField.defaultProps = {
  error: '',
  isTouched: false
}
