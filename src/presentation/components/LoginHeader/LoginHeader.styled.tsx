import styled from 'styled-components'

export default styled.header`
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
`
