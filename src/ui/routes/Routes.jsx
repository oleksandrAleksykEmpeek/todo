import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Login from '../pages/Login/Login';

import { paths } from '../../constants/paths';
import Home from '../pages/Home/Home';

const AppRoutes = () => {
  const { LOGIN } = paths;
  return (
    <Routes>
      <Route path={LOGIN} element={<Login />} />
      <Route path="/" element={<PrivateRoute component={<Home />} />} />
    </Routes>
  );
};
export default AppRoutes;
