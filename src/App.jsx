//React Router
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//Estilos
import './App.css'
//Páginas
import Home from './pages/Home'
import Especialidades from './pages/Especialidades';
import Historia from './pages/Historia'
import LGPD from './pages/LGPD'
import Estrutura from './pages/Estrutura';
import Convenios from './pages/Convenios'
import Socioambiental from './pages/Socioambiental';
import TrabalheConosco from './pages/TrabalheConosco';
import AssistenciaSocial from './pages/AssistenciaSocial';
import BlocoCirurgico from './pages/BlocoCirurgico';
import CentroClinico from './pages/CentroClinico';
import Maternidade from './pages/Maternidade';
import Internacao from './pages/Internacao';
import Laboratorio from './pages/Laboratorio';
import Emergencia from './pages/Emergencia';
import Pediatria from './pages/Pediatria';
import Psicologia from './pages/Psicologia';
import Parcerias from './pages/Parcerias';
import NoticiasHome from './pages/NoticiasHome';
import PaginaNoticia from './pages/PaginaNoticia';


//Componentes
import MenuPrincipal from './components/MenuPrincipal';
import Footer from './components/Footer';




function App() {


  return(
 <div className='App'>


 <BrowserRouter>
 <MenuPrincipal></MenuPrincipal>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      {/* Menu Principal */}
          {/* Menu Instituição */}
              <Route path="/historia" element={<Historia/>}></Route>
              <Route path="/especialidades" element={<Especialidades/>}></Route>
              <Route path="/estrutura" element={<Estrutura/>}></Route>
              <Route path="/convenios-e-planos" element={<Convenios/>}></Route>
              {/* Rota do trabalhe conosco está na sessão do rodapé */}
        
          {/* Menu Serviços */}
              <Route path="/servicos/assistencia-social" element={<AssistenciaSocial/>}></Route>
              <Route path="/servicos/bloco-cirurgico" element={<BlocoCirurgico/>}></Route>
              <Route path="/servicos/centro-clinico" element={<CentroClinico/>}></Route>
              <Route path="/servicos/maternidade" element={<Maternidade/>}></Route>
              <Route path="/servicos/internacao" element={<Internacao/>}></Route>
              <Route path="/servicos/laboratorio" element={<Laboratorio/>}></Route>
              <Route path="/servicos/emergencia" element={<Emergencia/>}></Route>
              <Route path="/servicos/pediatria" element={<Pediatria/>}></Route>
              <Route path="/servicos/psicologia" element={<Psicologia/>}></Route>


      <Route path="/noticias" element={<NoticiasHome/>}></Route>
      <Route path="/noticias/:title/:id" element={<PaginaNoticia/>}></Route>
      <Route path="/parcerias" element={<Parcerias/>}></Route>
      <Route path="/lgpd" element={<LGPD/>}></Route>

      {/* Rodapé */}
      <Route path='/socioambiental' element={<Socioambiental/>}></Route>
      <Route path='/trabalhe-conosco' element={<TrabalheConosco/>}></Route>
      


    </Routes>
    <Footer></Footer>
 </BrowserRouter>


 </div>

  );
}


export default App
