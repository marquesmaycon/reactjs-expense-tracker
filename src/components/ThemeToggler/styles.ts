import styled from 'styled-components'

export const Container = styled.div`
    width: 86.5%;
    text-align: end;
`

export const Button = styled.button`
    padding: 5px 10px;
    background-color: ${({theme})=> theme.colors.primary};
    color: ${({theme})=> theme.bg.tertiary};
    border: 0;
    border-radius: 8px;
    transition: all ease .5s;
    opacity: .2;

    &:hover {
        border-radius: 15px;
        opacity: 1;
    }
`