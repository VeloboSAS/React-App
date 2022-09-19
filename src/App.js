import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, } from 'react-router-dom';
import { Layout } from './Layout';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Pedicure from './Components/Services/ServicesPages/Pedicure';
import Contacts from './Components/Contacts/Contacts';

 
const App = () => {
  return (
  <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route  index  element={<Home/>} />
        <Route  path="services" element={<Services/>} />
        <Route  path="pedicure" element={<Pedicure/>} />
        <Route  path="about" element={<About/>} />
        <Route  path="contacts" element={<Contacts/>} />
      </Route>
  </Routes>
  </>
  );
}

export default App;