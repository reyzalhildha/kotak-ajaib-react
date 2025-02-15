import './assets/css/style.css';
import './assets/css/override-class.css';
import './assets/js/index';

import Index from "./pages/index.jsx";
import Peraturan from "./pages/peraturan/peraturan.jsx";
import PeraturanKeluarga from "./pages/peraturan/peraturan-keluarga.jsx";
import PeraturanKeluarga2 from "./pages/peraturan/peraturan-keluarga-contoh2.jsx";
import PeraturanSekolah from "./pages/peraturan/peraturan-sekolah.jsx";
import PeraturanMasyarakat from "./pages/peraturan/peraturan-masyarakat.jsx";
import KotakAjaib from "./pages/kotak-ajaib.jsx";
import SoalMateri from "./pages/soal-materi.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/peraturan" element={<Peraturan />} />
        <Route path="/peraturan-keluarga" element={<PeraturanKeluarga />} />
        <Route path="/peraturan-keluarga-contoh2" element={<PeraturanKeluarga2 />} />
        <Route path="/peraturan-sekolah" element={<PeraturanSekolah />} />
        <Route path="/peraturan-masyarakat" element={<PeraturanMasyarakat />} />
        <Route path="/kotak-ajaib" element={<KotakAjaib />} />
        <Route path="/soal-materi" element={<SoalMateri />} />
      </Routes>
    </>
  );
}

export default App;
