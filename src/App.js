import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './ui/routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
