/* eslint-disable no-use-before-define */
import styled, { css } from 'styled-components'
import React from 'react'

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  children?: /* React.ReactNode | (() => any)| */ any;
}

interface IModalWrapper {
  isOpen: boolean;
}

const ModalWrapper = styled.div<IModalWrapper>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: scrool;

  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all
      `
    } else {
      return css`
        opacity: 0;
        pointer-events: none;
      `
    }
  }}
`

function Modal ({ isOpen, onClose, children }: IModal) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        // @ts-ignore
        const isSafeArea = event.target.closest('[data-modal-safe-area="true"]')

        if (!isSafeArea) {
          onClose()
        }
      }}
    >
      {children({
        'data-modal-safe-area': 'true'
      })}
    </ModalWrapper>
  )
}

export default Modal
