import React from 'react'

import LoginContainerStyled from './Login.styled'
import { TextField, Button, LoginHeader, Footer, FormStatus } from '../../components'

const Login: React.FC = () => {
  return (
      <LoginContainerStyled>
        <LoginHeader />
        <form className='form'>
          <h2>Login</h2>
          <TextField type="email" name="email" placeholder='Digite seu e-mail' />
          <TextField type="password" name="password" placeholder='Digite sua senha' />
          <Button type='submit'>Entrar</Button>
          <span className='link'>Criar conta</span>
          <FormStatus />
        </form>
        <Footer />
      </LoginContainerStyled>
  )
}
export default Login
