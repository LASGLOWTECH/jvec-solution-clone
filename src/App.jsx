// import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
// import Home from "./Home"
// import About from "./About"
// import Contact from "./Contact"
// import { motion } from "framer-motion"
// import reactLogo from './assets/react.svg'
import Navbar from "./assets/Navbar"
import Footer from "./assets/Footer"
import { Home } from "./assets/Home"

function App() {
  

  return (
    <>
<Navbar/>


<Home/>

      {/* <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    </div> */}

<Footer/>
    </>
  )
}

export default App
