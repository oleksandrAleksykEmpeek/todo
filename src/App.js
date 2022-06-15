import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AppRoutes from './ui/routes/Routes';
import Layout from './ui/components/Layout/Layout';

import './ui/assets/styles/styles.scss';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const isAuth = useSelector(state => state.auth.isAuth);

  useEffect(() => {
    const loggedIn = sessionStorage.getItem('isLoggedIn');
    setLoggedIn(loggedIn);
  }, [isAuth]);
  return (
    <BrowserRouter>
      <div className="app">
        {isLoggedIn && (
          <Layout>
            <AppRoutes />
          </Layout>
        )}
        {!isLoggedIn && <AppRoutes />}
      </div>
    </BrowserRouter>
  );
}

export default App;
