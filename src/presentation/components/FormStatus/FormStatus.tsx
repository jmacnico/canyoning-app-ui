import React, { useContext } from 'react'
import FormStatusStyled from './FormStatus.styled'
import { Spinner } from '../'
import Context from '@/presentation/contexts/form/FormContext'

const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(Context)
  return (
    <FormStatusStyled data-testid="error-wrap">
      {isLoading && <Spinner />}
      {errorMessage && <span className='error'>{errorMessage}</span>}
    </FormStatusStyled>
  )
}

export default FormStatus
