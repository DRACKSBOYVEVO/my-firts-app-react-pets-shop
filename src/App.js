import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import PageNotFound from './pages/PageNotFound'
import Header from './components/Header';

import Categoria from './pages/Categoria';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />

        <Route path="/categoria/:id/*" element={<Categoria />} />
        <Route path='*' element = { <PageNotFound/> }/>
      </Routes>
    </Router>
  );
}

export default App;