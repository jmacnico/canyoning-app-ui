import styled from 'styled-components'
import { ButtonStyled, TextFieldStyled, SpinerStyled } from '@/presentation/components'


export default styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  .header {
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: column;
    border-top: 40px solid ${({ theme }) => theme.colors.primaryDark};
    align-items: center;

    img {
      margin-top: 40px;
    }

    h1 {
      color: ${({ theme }) => theme.colors.white};
      margin: 16px 0px 40px
    }
  }

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

    .error-wrap {      
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
    }

  }

  .footer {
    background-color: ${({ theme }) => theme.colors.primary};
    height: 48px;
  }
`