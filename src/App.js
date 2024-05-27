import './assets/css/style.css';
import './assets/css/override-class.css';
import './assets/js/index';

import Index from "./pages/index.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </>
  );
}

export default App;
