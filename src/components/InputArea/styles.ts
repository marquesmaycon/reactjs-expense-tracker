import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.bg.secondary};
    box-shadow: 0 0 5px ${({ theme }) => theme.shadow.primary};
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    input, select {
        padding: 8px 12px;
        border-radius: 10px;
        border: 1px solid ${({ theme }) => theme.shadow.primary};
        outline: 0;
        margin-inline: 10px;
        min-width: 105px;
        font-size: 15px;
        background-color: ${({ theme }) => theme.bg.secondary};
        color: ${({ theme }) => theme.colors.primary};
        transition: all ease .2s;

        &:hover {
            background-color: ${({ theme }) => theme.bg.tertiary};
        }

        &::placeholder {
            color: ${({ theme }) => theme.colors.primary};
        }
    }

    button {
        padding: 8px 12px;
        font-weight: bold;
        background: linear-gradient(90deg, rgba(0,35,255,1) 0%, rgba(102,0,204,1) 86%);
        color: ${({ theme }) => theme.colors.secondary};
        border: 0;
        border-radius: 8px;
        transition: all ease .5s;
        cursor: pointer;

        &:hover {
            background: linear-gradient(125deg, rgba(102,0,204,1) 0%, rgba(0,35,255,1) 86%);
            border-radius: 15px;
        }
    }
`