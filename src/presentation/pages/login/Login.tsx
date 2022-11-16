import React, { useState } from 'react'
import LoginContainerStyled from './Login.styled'
import { TextField, Button, LoginHeader, Footer, FormStatus } from '../../components'
import Context from '@/presentation/contexts/form/FormContext'

const Login: React.FC = () => {
  const [state] = useState({
    isLoading: false

  })

  const [errorState] = useState({
    main: '',
    email: 'Campo obrigatório',
    password: 'Campo obrigatório'

  })

  return (
    <LoginContainerStyled>
      <LoginHeader />
      <Context.Provider value={{ state, errorState }}>
        <form className='form'>
          <h2>Login</h2>
          <TextField type="email" name="email" placeholder='Digite seu e-mail' />
          <TextField type="password" name="password" placeholder='Digite sua senha' />
          <Button data-testid="submit" type='submit' disabled>Entrar</Button>
          <span className='link'>Criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </LoginContainerStyled>
  )
}
export default Login
