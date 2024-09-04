
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import './styles/components/layout/Header.css';
import './styles/components/layout/Nav.css';
import './styles/components/layout/Footer.css';
import './styles/components/pages/Inicio.css';


import Header from './componentes/Header';
import Nav from './componentes/Nav';
import Footer from './componentes/Footer';

import Inicio from './pages/Inicio';
import UnJugador from './pages/UnJugador';
import Multijugador from './pages/Multijugador';
import AccionAventura from './pages/AccionAventura';
import Disparos from './pages/Disparos';
import Deportes from './pages/Deportes';
import Estrategia from './pages/Estrategia';
import Simulacion from './pages/Simulacion';
import Contacto from './pages/Contacto';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/UnJugador" element={<UnJugador/>}/>
        <Route path="/Multijugador" element={<Multijugador/>}/>
        <Route path="/AccionAventura" element={<AccionAventura/>} />
        <Route path="/Disparos" element={<Disparos/>} />
        <Route path="/Deportes" element={<Deportes/>} />
        <Route path="/Estrategia" element={<Estrategia/>}/>
        <Route path="/Simulacion" element={<Simulacion/>} />
        <Route path="/Contacto" element={<Contacto/>} />

      </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
