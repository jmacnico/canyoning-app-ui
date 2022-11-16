import React, { useState } from 'react'
import LoginContainerStyled from './Login.styled'
import { TextField, Button, LoginHeader, Footer, FormStatus } from '../../components'
import Context from '@/presentation/contexts/form/FormContext'

type StateProps = {
  isLoading: boolean
  errorMessage: string
}

const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''

  })
  return (
    <LoginContainerStyled>
      <LoginHeader />
      <Context.Provider value={state}>
        <form className='form'>
          <h2>Login</h2>
          <TextField type="email" name="email" placeholder='Digite seu e-mail' />
          <TextField type="password" name="password" placeholder='Digite sua senha' />
          <Button type='submit'>Entrar</Button>
          <span className='link'>Criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </LoginContainerStyled>
  )
}
export default Login
