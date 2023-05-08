import { Formik, ErrorMessage, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/operations';
import * as yup from 'yup';

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
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onLoginFormSubmit}
    >
      <Form>
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="div" />
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
