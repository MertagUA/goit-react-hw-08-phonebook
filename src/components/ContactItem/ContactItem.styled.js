import styled from '@emotion/styled';
import { theme } from 'utils/theme';

export const Item = styled.li`
  position: relative;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :not(:first-of-type) {
    margin-top: 10px;
  }
`;

export const ContactName = styled.p`
  margin-right: 10px;
`;

export const DeleteButton = styled.button`
  width: 140px;
  height: 35px;
  border: 1px solid ${theme.color.darkGrey};
  border-radius: 10px;
  padding: 5px;
  font-size: 18px;
  box-shadow: ${theme.boxShadow};
  background-color: ${theme.color.white};
  cursor: pointer;
`;
