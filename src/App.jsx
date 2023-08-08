import { Route, Routes } from 'react-router-dom';
import Home from './ui/pages/Home/Home';
import NotFound from './ui/pages/NotFound/NotFound';
import Auth from './ui/pages/Auth/Auth';
import Erp from './ui/pages/Erp/Erp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/erp" element={<Erp />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
