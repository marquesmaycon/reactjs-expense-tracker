import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    background-color: ${({ theme }) => theme.bg.secondary};
    padding: 20px;
    box-shadow: 0 0 5px ${({ theme }) => theme.shadow.primary};
    border-radius: 10px;
    margin-top: 20px;
`;

export const TableHead = styled.th<{ width?: number }>`
    width: ${({ width }) => width ? `${width}px` : 'auto'};
    padding: 10px 0;
    text-align: left;
    color: ${({ theme }) => theme.colors.primary};
`;