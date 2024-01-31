import { useState } from 'react'
import './App.css'
import Menu from './components/Menu'

function App() {

  const [menuOptions,setMenuOptions] = useState([
    {
    name:"Instituição",
    link: "#instituicao"},
    {
      name:"Serviços",
      link: "#servicos"},
    {
      name:"Notícias",
      link: "#noticias"},
    {
      name:"Doação de Sangue",
      link: "#doacao"}, 
    {
      name:"Parcerias",
      link: "#parcerias"},
    {
      name:"Pesquisa de Satisfação",
      link: "#pesquisaDeSatisfacao"},   

    ]
      
    );


  return (
    <>
      <Menu menuOptions={menuOptions}></Menu>
   
    </>
  )
}

export default App
