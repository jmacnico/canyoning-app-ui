import React from 'react'
import { StylesContainer } from '@/presentation/styles'
import LoginContainerStyled from './Login.styled'
import { TextField, Button, Spiner, Logo } from '../../components'

const Login: React.FC = () => {
  return (

    <StylesContainer>
      <LoginContainerStyled>
        <header className='header'>
          <Logo/>
          <h1>Canyoning</h1>
        </header>
        <form className='form'>
          <h2>Login</h2>
          <TextField type="email" name="email" placeholder='Digite seu e-mail' />
          <TextField type="password" name="password" placeholder='Digite sua senha' />
          <Button type='submit'>Entrar</Button>
          <span className='link'>Criar conta</span>
          <div className='error-wrap'>
            <Spiner />
            <span className='error'>error</span>
          </div>
        </form>
        <footer className='footer'></footer>
      </LoginContainerStyled>
    </StylesContainer>
  )
}
export default Login
