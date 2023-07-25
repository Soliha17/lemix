import {  Route, Routes } from "react-router-dom";
import Home from "./ui/pages/Home/Home";
import NotFound from "./ui/pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
