import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
// import {BrowserRouter as Router} from 'react-router-dom';


 
const App = () => {
  return (

      <div className='App'>
          <Header /> 
          <Footer /> 
    
      </div>

  );
}

export default App;