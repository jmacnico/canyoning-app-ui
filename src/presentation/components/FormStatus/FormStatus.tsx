import React, { useContext } from 'react'
import FormStatusStyled from './FormStatus.styled'
import { Spinner } from '../'
import Context from '@/presentation/contexts/form/FormContext'

const FormStatus: React.FC = () => {
  const { state } = useContext(Context)
  return (
    <FormStatusStyled data-testid="error-wrap">
      {state.isLoading && <Spinner />}
      {state.mainError && <span className='error'>{state.mainError}</span>}
    </FormStatusStyled>
  )
}

export default FormStatus
