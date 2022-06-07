import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../constants/paths';

const PrivateRoute = ({ component }) => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');

  const navigate = useNavigate();
  const { LOGIN } = paths;
  useEffect(() => {
    if (!isLoggedIn) navigate(LOGIN);
  }, [isLoggedIn]);
  return component;
};

export default PrivateRoute;
