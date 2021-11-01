import React from 'react';
import Navbar from './components/Navbar';
import Text from './components/Text'
import Card from './components/card'
import Hour from './components/hour'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './components/style.css'

function App() {


  return (
    <div>
      <Navbar />
      <div id='header' className='display-2 text-center'>Hi, Welcome to my Daily Web Page👋</div>
      <Hour />
      <Text />
      <Card/>
    

      
    </div>  
  );
}

export default App;
