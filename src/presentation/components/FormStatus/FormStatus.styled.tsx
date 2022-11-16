import styled from 'styled-components'
import { SpinerStyled } from '../'

export default styled.div`  
    display: flex;
    flex-direction: column;
    align-items: center;
    
    ${SpinerStyled} {
      margin-top: 30px;
    }

    .error {
      margin-top: 30px;
      color: ${({ theme }) => theme.colors.primaryLight};
    }
`
