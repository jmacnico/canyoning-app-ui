import React from 'react'
import { FormStatusStyled } from '.'
import { Spiner } from '../'
const FormStatus: React.FC = () => {
  return (
    <FormStatusStyled>
      <Spiner />
      <span className='error'>error</span>
    </FormStatusStyled>
  )
}

export default FormStatus
