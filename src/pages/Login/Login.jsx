import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/operations';
import * as yup from 'yup';
import {
  Div,
  FormStyled,
  InputName,
  InputWrapper,
  Label,
  LoginButton,
} from './Login.styled';

export const Login = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const schema = yup.object().shape({
    email: yup.string().email().required('Please enter your email'),
    password: yup
      .string()
      .required('No password provided.')
      .min(8, 'Must contain at least 8 characters'),
  });

  const onLoginFormSubmit = (user, { resetForm }) => {
    dispatch(logIn(user));
    resetForm();
  };

  return (
    <Div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onLoginFormSubmit}
      >
        <FormStyled>
          <InputWrapper>
            <Label htmlFor="email">Email: </Label>
            <InputName type="email" name="email" id="email" />
            <ErrorMessage name="email" component="div" />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="password">Password: </Label>
            <InputName type="password" name="password" id="password" />
            <ErrorMessage name="password" component="div" />
          </InputWrapper>
          <LoginButton type="submit">Submit</LoginButton>
        </FormStyled>
      </Formik>
    </Div>
  );
};
