import React, { useState, useEffect } from 'react'
import LoginContainerStyled from './Login.styled'
import { TextField, Button, LoginHeader, Footer, FormStatus } from '../../components'
import Context from '@/presentation/contexts/form/FormContext'
import { IValidation } from '@/presentation/protocols/IValidation'

type Props = {
  validation: IValidation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    mainError: '',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório'

  })

  useEffect(() => {
    validation.Validate({ email: state.email })
  }, [state.email])

  useEffect(() => {
    validation.Validate({ password: state.password })
  }, [state.password])

  return (
    <LoginContainerStyled>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
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
