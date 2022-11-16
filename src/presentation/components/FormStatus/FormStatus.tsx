import React, { useContext } from 'react'
import FormStatusStyled from './FormStatus.styled'
import { Spinner } from '../'
import Context from '@/presentation/contexts/form/FormContext'

const FormStatus: React.FC = () => {
  const { state, errorState } = useContext(Context)
  return (
    <FormStatusStyled data-testid="error-wrap">
      {state.isLoading && <Spinner />}
      {errorState.main && <span className='error'>{errorState.main}</span>}
    </FormStatusStyled>
  )
}

export default FormStatus
