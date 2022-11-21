import styled from 'styled-components'

export const Container = styled.div`
    flex: 1;
`
export const Title = styled.div`
    text-align: center;
    font-weight: bold;
    color: ${({theme})=> theme.colors.tertiary};
    margin-bottom: 5px;
`
export const Info = styled.div<{ txtColor?: string }>`
    text-align: center;
    font-weight: bold;
    color: ${({ txtColor, theme }) => txtColor ?? theme.colors.primary};
`