import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../constants/paths';

const PrivateRoute = ({ component }) => {
  const { isAuth } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const { LOGIN } = paths;
  useEffect(() => {
    if (!isAuth) navigate(LOGIN);
  }, []);
  return component;
};

export default PrivateRoute;
