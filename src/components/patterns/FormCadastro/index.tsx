import { Box } from '../../foundation/layout/Box'
import { useState } from 'react'
import { Lottie } from '@crello/react-lottie'
import sucessAnimation from './animation/sucess.json'
import Button from '../../commons/Button'
import TextField from '../../Forms/TextField'
import { Grid } from '../../foundation/layout/Grid'
import Text from '../../foundation/Text'
import CancelIcon from '@material-ui/icons/Cancel'

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR'
}

interface IProps {
	propsDoModal: any;
	Close: () => void;
}

function FormContent () {
  const [isFormSubmited, setIsFormSubmited] = useState(false)
  const [submissionStates, setSubmissionStates] = useState(formStates.DEFAULT)
  const [userInfo, setUserInfo] = useState({
    name: '',
    password: ''
  })

  function handleChange (event: any) {
    const fieldName = event.target.getAttribute('name')
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value
    })
  }

  const isFomInvalid =
		userInfo.name.length === 0 || userInfo.password.length === 0
  return (
		<form
			onSubmit={
				async (event) => {
				  event.preventDefault()
				  setIsFormSubmited(true)

				  const userDTO = {
			    name: userInfo.name,
			    password: userInfo.password
			  }
				console.log(userDTO)
			  await fetch('https://app-instalura.herokuapp.com/cadastro', {
			    method: 'Post',
			    headers: {
			      'Content-Type': 'application/json'
			    },
			    body: JSON.stringify(userDTO)
			  })
			    .then((respostaDoServidor) => {
			      if (respostaDoServidor.ok) {
			        return respostaDoServidor.json()
			      }

			      throw new Error(' Não foi possível cadastrar o usuário agora :(')
			    })
			    .then(() => {
			      setSubmissionStates(formStates.DONE)
			    })
			    .catch(() => {
			      setSubmissionStates(formStates.ERROR)
			    })
			    .finally(() => {})
				}}>
			<Text variant="title" tag="h1" color="tertiary.main">
				Pronto para saber da vida dos outros?
			</Text>
			<Text
				variant="paragraph1"
				tag="p"
				color="tertiary.light"
				marginBottom="32px">
				Você está a um passo de saber tudoo que está rolando no bairro, complete
				seu cadastro agora!
			</Text>

			<div>
				<TextField
					placeholder="Maximus"
					type="text"
					name="name"
					onChange={handleChange}
					value={userInfo.name}
				/>
			</div>

			<div>
				<TextField
					placeholder="Max Milliano"
					type="text"
					name="password"
					onChange={handleChange}
					value={userInfo.password}
				/>
			</div>

			<Button
				variant="primary.main"
				type="submit"
				disabled={isFomInvalid}
				fullWidth>
				Cadastrar
			</Button>

			{isFormSubmited && submissionStates === formStates.DONE && (
				<Box display="flex" justifyContent="center">
					<Lottie
						width="150px"
						height="150px"
						className="lottie-container basic"
						config={{
						  animationData: sucessAnimation,
						  loop: false,
						  autoplay: true
						}}
					/>
				</Box>
			)}

			{isFormSubmited && submissionStates === formStates.ERROR && (
				<p>Deu tudo Errado </p>
			)}
		</form>
  )
}

export default function FormCadastro ({ propsDoModal, Close }: IProps) {
  return (
		<Grid.Row marginLeft={0} marginRight={0} flex={1} justifyContent="flex-end">
			<Grid.Col
				display="flex"
				paddingRight={{ md: '0' }}
				flex={1}
				value={{ xs: 12, md: 5, lg: 4 }}>
				<Box
					boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
					display="flex"
					flexDirection="column"
					justifyContent="center"
					flex={1}
					padding={{
					  xs: '16px',
					  md: '85px'
					}}
					backgroundColor="white"
					{...propsDoModal}
				>
					<Button onClick={Close} width="100px">
						<CancelIcon />
					</Button>
					<FormContent />
				</Box>
			</Grid.Col>
		</Grid.Row>
  )
}
