import React from 'react'
import TextFieldStyled from './TextField.styled'

const TextField: React.FC<any> = (props) => {
  return (
    <TextFieldStyled>
      <input {...props} />
      <span className='status'>🔴</span>
    </TextFieldStyled>
  )
}

export default TextField
