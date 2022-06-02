import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<div>Login</div>} />
      <Route path="/" element={<PrivateRoute component={<div>Hello</div>} />} />
    </Routes>
  );
};
export default AppRoutes;
