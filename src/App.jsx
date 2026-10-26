import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import Contacto from './pages/Contacto';

import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>SuperAhorro</h1>
        <p>Tu supermercado de confianza</p>
      </header>

      <div className="contenido">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/quienes-somos"
            element={<QuienesSomos />}
          />

          <Route
            path="/contacto"
            element={<Contacto />}
          />
        </Routes>
      </div>

      <Navbar />
    </div>
  );
}

export default App;