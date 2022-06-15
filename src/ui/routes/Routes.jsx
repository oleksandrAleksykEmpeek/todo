import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';

import { paths } from '../../constants/paths';

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
