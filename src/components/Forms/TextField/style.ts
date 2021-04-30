import styled, { css } from 'styled-components'
import React from 'react'

export interface IInput {
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

export const InputWrapper = styled.div`
margin-bottom: 17px;
`

export const Input = styled.input<IInput>`
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
