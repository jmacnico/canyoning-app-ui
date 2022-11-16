import styled from 'styled-components'

export default styled.button`
   background-color: ${({ theme }) => theme.colors.primary};
   border-radius: 8px;
   color: ${({ theme }) => theme.colors.white};
   font-size: 16px;
   border: none;
   line-height: 60px;

   &:hover {
     opacity: 0.9;
   }
`
