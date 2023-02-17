import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  margin: 0 auto 20px;
  border: 1px solid #777777;
`;

export const UserThumb = styled.div`
  text-align: center;
`;

export const Avatar = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: 20px auto;
`;

export const UserName = styled.p`
  font-size: 35px;
  margin-bottom: 10px;
  font-weight: bold;
`;
export const UserTag = styled.p`
  margin-bottom: 10px;
  color: #777777;
  font-size: 22px;
`;

export const Location = styled.p`
  margin-bottom: 20px;
  color: #777777;
  font-size: 24px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-top: 1px solid #777777;
  background-color: #e7f5f9;
  text-align: center;
`;
export const StatListItem = styled.li`
  width: 100%;
  height: 100%;
  padding: 20px 0;

  :not(:last-child) {
    border-right: 1px solid #777777;
  }
`;

export const Label = styled.span`
  display: flex;
  justify-content: center;
  color: #777777;
  font-size: 24px;
  margin-bottom: 5px;
`;

export const LabelValue = styled.span`
  display: block;
  font-size: 22px;
  font-weight: bold;
`;
