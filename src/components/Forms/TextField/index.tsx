// eslint-disable-next-line no-use-before-define
import React from 'react'
import styled, { css } from 'styled-components'
import Text from '../../foundation/Text'
interface IInput {
	placeholder: string;
	name: string;
	type?: string;
	value: string;
	children?: string;
	isTouched?: boolean;
	isFieldInvalid?: boolean;
	error?: string;
	onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}
const InputWrapper = styled.div`
	margin-bottom: 17px;
`

const Input = styled.input<IInput>`
	width: 100%;
	border: 1px solid ${({ theme }) => theme.colors.tertiary.light.colors};
	padding: 12px 16px;
	outline: 0;
	border-radius: ${({ theme }) => theme.borderRadius};

  ${({ theme, isFieldInvalid }) => isFieldInvalid && css`
    border-color: ${theme.colors.error.main.color};
    & + span {
      color: ${theme.colors.error.main.color};
      font-size: 11px;
    }
  `}
`
export default function TextField ({
  isTouched,
  placeholder,
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
				isFieldInvalid={isFieldInvalid}
				{...props}
			/>

			{isFieldInvalid &&
				<Text
					variant='smallestException'
					color='error.main'
					role='alert'
				>
					{error}
				</Text>
			}

		</InputWrapper>
  )
}

TextField.defaultProps = {
  error: '',
  isTouched: false,
  isfFieldInvalid: false
}
