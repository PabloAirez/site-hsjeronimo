//React Router
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//Estilos
import './App.css'
//Páginas
import Home from './pages/Home'
import Especialidades from './pages/Especialidades';
import Historia from './pages/Historia'
import LGPD from './pages/LGPD'
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
      <Route path="/especialidades" element={<Especialidades/>}></Route>
      <Route path="/historia" element={<Historia/>}></Route>
      <Route path="/lgpd" element={<LGPD/>}></Route>
    </Routes>
    <Footer></Footer>
 </BrowserRouter>


 </div>

  );
}


export default App
