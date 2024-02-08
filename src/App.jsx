import { useState } from 'react'
import './App.css'
import MenuPrincipal from './components/MenuPrincipal'
import Banner from './components/Banner'


function App() {


  return (
    <>
  <MenuPrincipal></MenuPrincipal>
  <Banner imageBackground={"bg-index-banner"}></Banner>
    </>
  )
}

export default App
