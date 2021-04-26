/* eslint-disable no-use-before-define */
import React from 'react'
import { motion } from 'framer-motion'

import { ModalWrapper, LockScroll } from './styles'
// import Button from '../Button/styles'
interface IModal {
	isOpen: boolean;
	onClose: () => void;
	children?: any;
	formCadastro: boolean;
}

function Modal ({ isOpen, onClose, children, formCadastro }: IModal) {
  return (
		<ModalWrapper
			isOpen={isOpen}
			formCadastro={formCadastro}
			onClick={(event) => {
			  // @ts-ignore
			  const isSafeArea = event.target.closest(
			    '[data-modal-safe-area="true"]'
			  )

			  if (!isSafeArea) {
			    onClose()
			  }
			}}>
			{isOpen && <LockScroll />}
			<motion.div
				variants={{
				  open: {
				    x: 0
				  },
				  closed: {
				    x: '100%'
				  }
				}}
				animate={isOpen ? 'open' : 'closed'}
				transition={{
				  duration: 0.5
				}}
				style={{
				  display: 'flex',
				  flex: 1
				}}>
				{children({
				  'data-modal-safe-area': 'true'
				})}
			</motion.div>
		</ModalWrapper>
  )
}

export default Modal

Modal.defaultProps = {
  formCadastro: false
}
