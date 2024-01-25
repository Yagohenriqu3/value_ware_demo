import Navbar from './components/Navbar.js'
import Footer from './components/footer.js'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//pages
import Main from './pages/Main.js'
import MbasEcursos from './pages/MbasEcursos.js';
import SobreNos from './pages/SobreNos.js';
import Vmo from './pages/Vmo.js';
import MbaEngSw from './pages/MbasEcursos/MbaEngSW.js';
import MbaGp from './pages/MbasEcursos/MbaGp.js';
import MbaSaude from './pages/MbasEcursos/MbaSaude.js';
import CursosInCompany from './pages/MbasEcursos/CursosInCompany.js';
import ButtonContatenos from './components/ButtonContatenos.js';
import Contatenos from './components/main/Contatenos.js'
import ScrollToTop from './components/ScrollToTop.js';

//--------


function App() {
  return (
    <div>
      
       <Router>
       <div>
        <ScrollToTop />
        <nav>
          <Navbar />
        </nav>
      <Routes>
        <Route path='/' element={<Main />} exact />
        <Route path='/Vmo' element={<Vmo />} />
        <Route path='/MbaEcursos' element={<MbasEcursos />} />
        <Route path='/SobreNos' element={<SobreNos />} />
        <Route path='/Contate-nos' element={<Contatenos />} />
        <Route path='/MbaEcursos/MbaEngSW' element={<MbaEngSw />} />
        <Route path='/MbaEcursos/MbaGp' element={<MbaGp />} />
        <Route path='/MbaEcursos/MbaSaude' element={<MbaSaude />} />
        <Route path='/MbaEcursos/CursosInCompany' element={<CursosInCompany />} />
      </Routes>
        
      </div>
        <ButtonContatenos />
        <Footer/>
      </Router> 
      
      



      
    </div>
  )
}

export default App
