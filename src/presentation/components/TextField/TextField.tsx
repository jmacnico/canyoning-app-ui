import React from 'react'
import TextFieldStyled from './TextField.styled'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const TextField: React.FC<Props> = (props: Props) => {
  return (
    <TextFieldStyled>
      <input {...props} />
      <span className='status'>🔴</span>
    </TextFieldStyled>
  )
}

export default TextField
