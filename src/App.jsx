import { Route, Routes } from 'react-router-dom';
import Home from 'src/ui/pages/Home/Home';
import NotFound from 'src/ui/pages/NotFound/NotFound';
import Auth from 'src/ui/pages/Auth/Auth';
import Erp from 'src/ui/pages/Erp/Erp';

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
