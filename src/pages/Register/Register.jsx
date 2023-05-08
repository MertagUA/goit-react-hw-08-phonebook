import { Formik, ErrorMessage, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/operations';
import * as yup from 'yup';

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
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onRegisterFormSubmit}
    >
      <Form>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="div" />
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="div" />
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
