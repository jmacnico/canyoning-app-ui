import React, { memo } from 'react'
import { Logo } from '../'
import LoginHeaderStyled from './LoginHeader.styled'

const LoginHeader: React.FC = () => {
  return (
    <LoginHeaderStyled>
      <Logo />
      <h1>Canyoning</h1>
    </LoginHeaderStyled>
  )
}

export default memo(LoginHeader)
