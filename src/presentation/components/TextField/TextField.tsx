import React, { useContext } from 'react'
import TextFieldStyled from './TextField.styled'
import Context from '@/presentation/contexts/form/FormContext'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const TextField: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)
  const error = state[`${props.name}Error`]

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [props.name]: ev.target.value
    })
  }

  const getStatus = (): string => {
    return '🔴'
  }

  const getTitle = (): string => {
    return error
  }

  return (
    <TextFieldStyled>
      <input data-testid={props.name} {...props} onChange={handleChange} />
      <span data-testid={`${props.name}-status`} title={getTitle()} className='status'>{getStatus()}</span>
    </TextFieldStyled>
  )
}

export default TextField
