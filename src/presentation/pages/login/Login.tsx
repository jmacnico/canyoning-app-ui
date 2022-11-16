import React from 'react'
import { StylesContainer } from '@/presentation/styles'
import LoginContainerStyled from './Login.styled'
import { TextField, Button, Spiner, LoginHeader, Footer } from '../../components'

const Login: React.FC = () => {
  return (

    <StylesContainer>
      <LoginContainerStyled>
        <LoginHeader/>
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
        <Footer/>
      </LoginContainerStyled>
    </StylesContainer>
  )
}
export default Login
