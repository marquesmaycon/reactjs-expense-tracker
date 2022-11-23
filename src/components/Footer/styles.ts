import styled from 'styled-components';

export const Container = styled.footer`
   background-color: ${({ theme }) => theme.bg.secondary};
   padding: 20px;
   box-shadow: 0 0 5px ${({ theme }) => theme.shadow.primary};
   border-radius: 10px;
   margin-block: 20px;
   color: ${({ theme }) => theme.colors.primary};
   text-align: center;

   a {
      text-decoration: none;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.tertiary};
      transition: all ease .3s;
      &:hover {
         color: ${({ theme }) => theme.bg.primary};
      }
   }
`