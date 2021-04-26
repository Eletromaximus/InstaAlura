import styled, { createGlobalStyle, css } from 'styled-components'

interface IModalWrapper {
	isOpen: boolean;
	formCadastro: boolean;
}

export const ModalWrapper = styled.div<IModalWrapper>`
	display: flex;
	flex-direction: column;
	background: rgba(0, 0, 0, 0.9);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	overflow: scrool;
	transition: 0.3s;
	z-index: 100;

	${({ isOpen }) => {
		if (isOpen) {
			return css`
				opacity: 1;
				pointer-events: all;
				overflow: hidden;
			`
		} else {
			return css`
				opacity: 0;
				pointer-events: none;
				overflow: hidden;
			`
		}
	}}

${({ formCadastro }) => {
		if (formCadastro) {
			return css`
				align-items: stretch;
			`
		} else {
			return css`
				align-items: center;
				padding-top: 5%;
			`
		}
	}}

`
export const LockScroll = createGlobalStyle`
  body{
    overflow: hidden;
  }
`
