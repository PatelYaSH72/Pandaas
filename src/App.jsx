import React from 'react'
import Home from './components/Pages/Home'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resources from './components/Pages/Resources/Resources';
import Airesources from './components/Pages/Airsources/Airesources';
import ScrollToTop from './components/ScolltoTop';

const App = () => {
  return (
     <BrowserRouter>

     <Routes>
        <Route path="/" element={<Home />} />
     </Routes>
     <ScrollToTop/>
      <Routes>
        <Route path="/Resources-Information" element={<Resources/>} />
        <Route path="/Ai-Tools" element={<Airesources/>} />
      </Routes>
      <Footer/>
      
    </BrowserRouter>
  )
}

export default App
