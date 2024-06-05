import './assets/css/style.css';
import './assets/css/override-class.css';
import './assets/js/index';

import Index from "./pages/index.jsx";
import Peraturan from "./pages/peraturan/peraturan.jsx";
import PeraturanKeluarga from "./pages/peraturan/peraturan-keluarga.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/peraturan" element={<Peraturan />} />
        <Route path="/peraturan-keluarga" element={<PeraturanKeluarga />} />
      </Routes>
    </>
  );
}

export default App;
