// eslint-disable-next-line no-use-before-define
import React from 'react'
import Text from '../../foundation/Text'

import { InputWrapper, Input, IInput } from './style'
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
