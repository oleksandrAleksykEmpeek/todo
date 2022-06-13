import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AppRoutes from './ui/routes/Routes';
import Layout from './ui/components/Layout/Layout';

import { useSessionStorage } from './utils/getSessionStorage';

import './ui/assets/styles/styles.scss';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const isAuth = useSelector(state => state.auth.isAuth);

  useEffect(() => {
    setLoggedIn(useSessionStorage('isLoggedIn'));
  }, [isAuth]);
  return (
    <div className="app">
      <BrowserRouter>
        {isLoggedIn && <Layout />}
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
