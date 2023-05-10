import styled from '@emotion/styled';
import { theme } from 'utils/theme';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 1280px;

  padding: 10px 20px;

  border-bottom: 2px solid ${theme.color.darkGrey};
  border-left: 2px solid ${theme.color.darkGrey};
  border-right: 2px solid ${theme.color.darkGrey};
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;

  background-color: ${theme.color.white};
  font-size: 24px;
  font-weight: 500;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;
