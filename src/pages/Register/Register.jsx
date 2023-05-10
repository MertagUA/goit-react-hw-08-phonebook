import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/operations';
import * as yup from 'yup';
import {
  Div,
  FormStyled,
  InputName,
  InputWrapper,
  Label,
  LoginButton,
} from './Register.styled';

export const Register = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const schema = yup.object().shape({
    name: yup.string().required('Please enter your name'),
    email: yup.string().email().required('Please enter your email'),
    password: yup
      .string()
      .required('No password provided.')
      .min(8, 'Must contain at least 8 characters'),
  });

  const onRegisterFormSubmit = (user, { resetForm }) => {
    dispatch(register(user));
    resetForm();
  };

  return (
    <Div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onRegisterFormSubmit}
      >
        <FormStyled>
          <InputWrapper>
            <Label htmlFor="username">Username:</Label>
            <InputName type="text" name="name" id="username" />
            <ErrorMessage name="name" component="div" />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="email">Email:</Label>
            <InputName type="email" name="email" id="email" />
            <ErrorMessage name="email" component="div" />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="password">Password:</Label>
            <InputName type="password" name="password" id="password" />
            <ErrorMessage name="password" component="div" />
          </InputWrapper>
          <LoginButton type="submit">Submit</LoginButton>
        </FormStyled>
      </Formik>
    </Div>
  );
};
