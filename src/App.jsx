import { Route, Routes } from 'react-router-dom';
import Home from './ui/pages/Home/Home';
import NotFound from './ui/pages/NotFound/NotFound';
import Auth from './ui/pages/Auth/Auth';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
