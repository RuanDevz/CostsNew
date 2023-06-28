import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import Projetos from './pages/Projetos';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
      <Header />
        <nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/empresa" element={<Empresa />} />
          </Routes>
        </nav>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
