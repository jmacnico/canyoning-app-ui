import styled from 'styled-components'

export default styled.div`
  display: flex;
  align-items: center;
  position: relative;
  
  
  input {
    flex-grow: 1;
  }

  input[type="password"],
  input[type="email"] {
    border:1px solid ${({ theme }) => theme.colors.primaryLight};
    border-radius: 4px;
    line-height: 40px;
    padding: 0 40px 0 8px;
   

    &:focus {
      outline-color: ${({ theme }) => theme.colors.primaryLight};
    }
  }

  .status {
    position: absolute;
    right: 8px;
    font-size: 12px;
    cursor: help;
  }
`
