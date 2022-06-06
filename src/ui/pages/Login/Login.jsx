import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../../components/Input/Input';
import { login, setAuthState } from '../../../store/auth';

import { initialValues, validate } from './form';
import './Login.scss';
import { useEffect } from 'react';

const Login = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector(state => state.auth);
  const formik = useFormik({
    initialValues,
    validationSchema: validate,
    onSubmit: () => {
      dispatch(login({ email: formik.values.email, password: formik.values.password }));
      console.log(isAuth);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="loginForm">
      <h2>Login</h2>
      <Input formik={formik} name="email" type="email" />
      <Input formik={formik} name="password" type="password" />

      <button type="submit">Log In</button>
    </form>
  );
};
export default Login;
