import React from 'react';
import './App.css'



import Header from './components/Header';
import EcommerceHero from './components/EcommerceHero';
import Clients from './components/Clients';
import WhatWeDo from './components/WhatWeDo';
import Methodology from './components/Methodology';
import Figures from './components/Figures';
import Footer from './components/Footer';

function App() {
  return ( 
    <> 
      <div className="" style={{
        background: "radial-gradient(ellipse at 50% 0%, #2d1b4e 0%, #1a0f2e 50%, #0f0a1e 100%)",
      }}>

      <Header/>
      <EcommerceHero/>
      <Clients/>
      <WhatWeDo/>
      {/* <Figures/> */}
      <Methodology/>
      <Footer/>
      </div>
    </>
  )
}

export default App