import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import AppRoutes from './ui/routes/Routes';
import Layout from './ui/components/Layout/Layout';
import { ThunkGetUser } from './store/user/thunk/ThunkGetUser';

import './ui/assets/styles/styles.scss';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const isAuth = useSelector(state => state.auth.isAuth);

  useEffect(() => {
    const loggedIn = sessionStorage.getItem('isLoggedIn');
    setLoggedIn(loggedIn);
  }, [isAuth]);

  useEffect(() => {
    const userId = sessionStorage.getItem('userId');
    if (!!user) {
      dispatch(ThunkGetUser(userId));
    }
  }, [user]);
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
