import styled from 'styled-components'
import { ButtonStyled, TextFieldStyled } from '@/presentation/components'


export default styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
 

  .form {
    display: flex;
    flex-direction: column;
    width: 400px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 40px;
    border-radius: 8px;
    align-self: center;
    box-shadow: 0px 1px 3px -1px ${({ theme }) => theme.colors.black};

    h2 {
     color: ${({ theme }) => theme.colors.primaryDark};
     text-align: center;
     text-transform: uppercase;
     font-size: 20px;
    }

    ${ButtonStyled} {
      margin-top: 32px;

      &:disabled {
        background-color: ${({theme})=> theme.colors.disabledBackgound};
        color: ${({theme})=> theme.colors.color};

        &:hover {
          opacity: 1;
        }
      }
    }

    ${TextFieldStyled} {      
      margin-top: 16px;
    }

    .link{ 
      text-align: center;
      color: ${({ theme }) => theme.colors.primary};
      text-transform: lowercase;
      margin-top: 16px;
      cursor: pointer;
      
      &:hover {
        text-decoration: underline;
      }
    }

  }

  
`
