import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App.jsx';
import About from './components/About.jsx';
import ContactPage from './components/ContactPage.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';

import MarketplaceManagement from './pages/MarketplaceManagement.jsx';
import EcommerceDevelopment from './pages/EcommerceDevelopment.jsx';
import DigitalMarketing from './pages/DigitalMarketing.jsx';
import GraphicDesign from './pages/GraphicDesign.jsx';
import VirtualAssistance from './pages/VirtualAssistance.jsx';
import AccountingBookkeeping from './pages/AccountingBookkeeping.jsx';
import WebDevelopment from './pages/WebDevelopment.jsx';
import OtherServices from './pages/OtherServices.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css' 
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>   
      <Route path="/" element={<App />} /> 
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
      <Route path="/marketplace-management" element={<MarketplaceManagement/>} />
      <Route path="/ecommerce-development" element={<EcommerceDevelopment/>} />
      <Route path="/digital-marketing" element={<DigitalMarketing/>} />
      <Route path="/graphic-design" element={<GraphicDesign/>} />
      <Route path="/virtual-assistance" element={<VirtualAssistance/>} />
      <Route path="/accounting-bookkeeping" element={<AccountingBookkeeping/>} />
      <Route path="/web-development" element={<WebDevelopment/>} />
      <Route path="/other-services" element={<OtherServices/>} />
    </Routes>
  </BrowserRouter>
)
