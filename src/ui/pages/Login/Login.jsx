import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import Input from '../../components/Input/Input';

import { login, setAuthState } from '../../../store/auth';
import { initialValues, validate } from './form';

import './Login.scss';
import { ThunkLoginUser } from '../../../store/auth/thunk/loginUser';

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
    console.log(isAuth);
    if (isAuth) {
      console.log('user logged in');
      navigate('/');
    }
    console.log('user not logged in');
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
