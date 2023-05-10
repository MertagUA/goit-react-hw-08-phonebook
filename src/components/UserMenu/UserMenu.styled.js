import styled from '@emotion/styled';
import { theme } from 'utils/theme';

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const UserMenuBtn = styled.button`
  cursor: pointer;

  width: 125px;
  padding: 8px;

  border-radius: 20px;
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.darkGrey};

  background-color: ${theme.color.paleturquoise};
  font-weight: 700;
  font-size: 18px;
  box-shadow: ${theme.boxShadow};
`;
