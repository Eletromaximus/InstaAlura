import React, { useState } from 'react'
import get from 'lodash/get'
import Footer from '../../commons/Footer'
import Menu from '../../commons/Menu'
import Modal from '../../commons/Modal'
import SEO from '../../commons/SEO'
import { Box } from '../../foundation/layout/Box'
import FormCadastro from '../../patterns/FormCadastro'
import { WebsitePagesContext } from './context'
import Card from '../../commons/Card'

export { WebsitePagesContext } from './context'
interface IWebsitePagesWrapper {
  children: React.ReactNode;
  seoProps: {
    headTitle: string;
  };
  pageBoxProps: {
    backgroundImage: string,
    backgroundRepeat: string,
    backgroundPosition: string,
  };
  menuProps: {
    display: boolean;
    profilePage: boolean;
  };
  messages: any;
  formCadastro: boolean;
  token: string;
}

export default function WebsitePagesWrapper ({
  children,
  seoProps,
  pageBoxProps,
  menuProps,
  messages,
  formCadastro,
  token
}: IWebsitePagesWrapper) {
  const [isModalOpen, setIsModalState] = useState(false)

  const modalContent = (propsDoModal: any) => {
    const content = formCadastro
      ? <FormCadastro
          propsDoModal={propsDoModal}
          Close={() => setIsModalState(false)}
        />
      : <Card
          token={token}
          propsDoModal={propsDoModal}
          Close={() => setIsModalState(false)}
        />

    return content
  }

  return (
    <WebsitePagesContext.Provider
      value={{
        toggleModalCadastro: () => {
          setIsModalState(!isModalOpen)
        },
        getCMSContent: (cmsKey) => {
          return get(messages, cmsKey)
        }
      }}
    >
      <SEO {...seoProps}/>
    <Box
      display='flex'
      flex='1'
      flexDirection='column'
      {...pageBoxProps}
    >
      <Modal
				isOpen={isModalOpen}
        formCadastro={formCadastro}
				onClose={() => {
				  setIsModalState(false)
				}}>
				{(propsDoModal: any) => (
				  modalContent(propsDoModal)
				)}
			</Modal>
      {menuProps.display && <Menu
        onCadastrarClick={() => setIsModalState(true)}
        profileImgUrl={messages.avatarImage || null}
      />}
      {children}
      <Footer/>
    </Box>
    </WebsitePagesContext.Provider>
  )
}

WebsitePagesWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true,
    profilePage: false
  },
  messages: {},
  formCadastro: true,
  token: ''
}
