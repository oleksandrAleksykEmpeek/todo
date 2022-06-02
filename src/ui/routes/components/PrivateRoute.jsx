import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../constants/paths';

const PrivateRoute = ({ component }) => {
  const [isAuth, setAuth] = useState(true);
  const navigate = useNavigate();
  const { LOGIN } = paths;

  useEffect(() => {
    if (!isAuth) navigate(LOGIN);
  }, []);
  return component;
};

export default PrivateRoute;
