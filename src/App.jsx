//React Router
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//Estilos
import './App.css'
//Páginas
import Home from './pages/Home'
import Historia from './pages/Historia'


function App() {


  return(
 <div className='App'>
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/historia" element={<Historia/>}></Route>
    </Routes>
 </BrowserRouter>
 </div>

  );
}


export default App
