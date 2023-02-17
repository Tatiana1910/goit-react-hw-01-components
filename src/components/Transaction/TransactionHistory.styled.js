import styled from 'styled-components';

export const Table = styled.table`
  width: 50%;
  margin: 20px auto;
  text-align: center;
`;

export const TableHead = styled.thead`
  text-transform: uppercase;
  background-color: #808080;
  color: white;
`;

export const HeadTableData = styled.th`
  padding: 15px 0;
  outline: 1px solid var #777777;
`;

export const TableRow = styled.tr`
  &:nth-of-type(2n) {
    background-color: #e7e7e7;
  }
`;
export const TableData = styled.td`
  padding: 10px 0;
  outline: 1px solid #777777;
  color: #777777;
  text-transform: capitalize;
`;
