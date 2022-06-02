import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppRoutes from './ui/routes/Routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
