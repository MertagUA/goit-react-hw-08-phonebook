import styled from '@emotion/styled';
import { theme } from 'utils/theme';
import { Field, Form } from 'formik';

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 800px;
  padding: 215px;
  margin: 0 auto;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`;

export const LoginButton = styled.button`
  width: 180px;
  height: 40px;
  border: 1px solid ${theme.color.darkGrey};
  border-radius: 10px;
  padding: 5px;
  font-size: 20px;
  font-weight: 500;
  box-shadow: ${theme.boxShadow};
  background-color: ${theme.color.white};
  cursor: pointer;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: start;
  :not(:first-of-type) {
    margin-top: 10px;
  }
  font-size: 20px;
  font-weight: 500;
`;

export const InputName = styled(Field)`
  width: 300px;
  height: 40px;
  margin-top: 5px;
  padding-left: 10px;
  border-radius: 10px;
  font-size: 20px;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
