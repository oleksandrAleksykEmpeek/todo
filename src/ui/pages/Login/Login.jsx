import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import Input from '../../components/Input/Input';
import { ThunkLoginUser } from '../../../store/auth/thunk/loginUser';
import { ActionSetUser } from '../../../store/user/actions';

import { initialValues, validate } from './form';

import './Login.scss';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useSelector(state => state.auth);
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');

  const handleSubmit = async ({ email, password }) => {
    const { payload } = await dispatch(ThunkLoginUser({ email, password }));
    dispatch(ActionSetUser(payload[0]))
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validate,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    isLoggedIn && navigate('/');
  }, [isAuth, isLoggedIn]);

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
