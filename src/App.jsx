//React Router
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//Estilos
import './App.css'
//Páginas
import Home from './pages/Home'
import Especialidades from './pages/Especialidades';
import Historia from './pages/Historia'
import LGPD from './pages/LGPD'
import Convenios from './pages/Convenios'
import Socioambiental from './pages/Socioambiental';
//Componentes
import MenuPrincipal from './components/MenuPrincipal';
import Footer from './components/Footer';

import Estrutura from './pages/Estrutura';


function App() {


  return(
 <div className='App'>


 <BrowserRouter>
 <MenuPrincipal></MenuPrincipal>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/especialidades" element={<Especialidades/>}></Route>
      <Route path="/historia" element={<Historia/>}></Route>
      <Route path="/lgpd" element={<LGPD/>}></Route>
      <Route path='/socioambiental' element={<Socioambiental/>}></Route>
      <Route path="/estrutura" element={<Estrutura/>}></Route>
      <Route path="/convenios-e-planos" element={<Convenios/>}></Route>
    </Routes>
    <Footer></Footer>
 </BrowserRouter>


 </div>

  );
}


export default App
