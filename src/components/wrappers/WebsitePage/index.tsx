import React, { createContext, useState } from 'react'
import Footer from '../../commons/Footer'
import Menu from '../../commons/Menu'
import Modal from '../../commons/Modal'
import SEO from '../../commons/SEO'
import { Box } from '../../fundation/layout/Box'
import FormCadastro from '../../patterns/FormCadastro'

interface IWebsitePagesWrapper {
  children: React.ReactNode;
  seoProps: React.ReactNode;
  pageBoxProps: React.ReactNode;
  menuProps: boolean;
}

export const WebsitePagesContext = createContext({
  toggleModalCadastro: () => {}
})

export default function WebsitePagesWrapper ({ children, seoProps, pageBoxProps, menuProps }: IWebsitePagesWrapper) {
  const [isModalOpen, setIsModalState] = useState(false)

  return (
    <WebsitePagesContext.Provider
      value={{
        toggleModalCadastro: () => {
          setIsModalState(!isModalOpen)
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
				onClose={() => {
				  setIsModalState(false)
				}}>
				{(propsDoModal: any) => (
					<FormCadastro
						propsDoModal={propsDoModal}
						Close={() => setIsModalState(false)}
					/>
				)}
			</Modal>
      {menuProps && <Menu
        onCadastrarClick={() => setIsModalState(true)}
      />}
      {children}
      <Footer/>
    </Box>
    </WebsitePagesContext.Provider>
  )
}
