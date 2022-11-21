import styled from 'styled-components'

export const TableLine = styled.tr`

`

export const TableColumn = styled.td`
    padding: 10px 0;
`

export const Category = styled.div<{bgColor: string}>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #FFF;
    background-color: ${({bgColor}) => bgColor};
`

export const Value = styled.div<{color: string}>`
    color: ${({ color }) => color};
    font-weight: bold;
`