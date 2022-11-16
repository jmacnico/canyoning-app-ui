import React, { useContext } from 'react'
import TextFieldStyled from './TextField.styled'
import Context from '@/presentation/contexts/form/FormContext'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const TextField: React.FC<Props> = (props: Props) => {
  const { errorState } = useContext(Context)
  const error = errorState[props.name]
  const getStatus = (): string => {
    return '🔴'
  }

  const getTitle = (): string => {
    return error
  }

  return (
    <TextFieldStyled>
      <input {...props} />
      <span data-testid={`${props.name}-status`} title={getTitle()} className='status'>{getStatus()}</span>
    </TextFieldStyled>
  )
}

export default TextField
