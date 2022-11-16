import React from 'react'
import FormStatusStyled from './FormStatus.styled'
import { Spinner } from '../'
const FormStatus: React.FC = () => {
  return (
    <FormStatusStyled>
      <Spinner />
      <span className='error'>error</span>
    </FormStatusStyled>
  )
}

export default FormStatus
