import styled from '@emotion/styled';
import { theme } from 'utils/theme';

export const FooterStyled = styled.footer`
  width: 1280px;

  padding: 10px 20px;

  border-top: 2px solid ${theme.color.darkGrey};
  border-left: 2px solid ${theme.color.darkGrey};
  border-right: 2px solid ${theme.color.darkGrey};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  background-color: ${theme.color.white};
  font-size: 24px;
  font-weight: 500;
`;
