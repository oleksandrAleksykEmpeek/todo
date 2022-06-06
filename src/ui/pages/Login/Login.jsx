import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import Input from '../../components/Input/Input';
import { ThunkLoginUser } from '../../../store/auth/thunk/loginUser';
import { initialValues, validate } from './form';

import './Login.scss';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useSelector(state => state.auth);

  const formik = useFormik({
    initialValues,
    validationSchema: validate,
    onSubmit: () => {
      dispatch(ThunkLoginUser({ email: formik.values.email, password: formik.values.password }));
    },
  });

  useEffect(() => {
    isAuth && navigate('/');
  }, [isAuth]);
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
