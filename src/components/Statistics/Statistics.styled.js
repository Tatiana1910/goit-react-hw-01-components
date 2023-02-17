import styled from 'styled-components';

export const Container = styled.section`
  width: 50%;
  margin: 0 auto 20px;
  border: 1px solid #777777;
`;

export const TitleStatistics = styled.h2`
  font-size: 30px;
  margin-bottom: 10px;
  font-weight: bold;
  padding: 40px;
  text-align: center;
  color: #777777;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ListItem = styled.li`
  width: 100%;
  height: 100%;
  padding: 10px 0;
  text-align: center;
  font-size: 24px;
  background-color: ${randomBgColor};
`;

function randomBgColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Label = styled.span`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  font-weight: bold;
`;

export const Percentage = styled.span`
  font-size: 30px;
`;
