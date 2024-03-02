import React from 'react'
import Navbar from './component/Navbar'
import '../src/Style/App.css'
import Home from './component/Home'
import Skills from './component/Skills'
import About from './component/about'
import Contactme from './component/Contactme'


function App() {


  return (
    <>
    < Navbar/>
    < Home/>
    <Skills />
    <About />
    <Contactme/>
    </>
  )
}

export default App
