import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    background-color: ${({ theme }) => theme.bg.tertiary};
`;

export const Header = styled.div`
    background-color: ${({ theme }) => theme.bg.primary};
    height: 130px;
    text-align: center;
    padding-top: 30px;
`;

export const HeaderText = styled.h1`
    margin: 0;
    margin-bottom: 10px;
    padding: 0;
    color: ${({ theme }) => theme.colors.primary};
`;

export const Body = styled.div`
    margin: auto;
    max-width: 980px;
    margin-bottom: 50px;
`;