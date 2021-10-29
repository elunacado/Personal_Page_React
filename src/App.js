import React from 'react';
import Navbar from './components/Navbar';
import Text from './components/Text'
import Card from './components/card'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import images from './assets/images';
import './components/style.css'

function App() {
  return (
    <div>
      <Navbar />
      <div id='header' className='display-2 text-center'>Hi, Welcome to my Daily Web Page👋</div>
      <Text />
      <Card/>

      
    </div>  
  );
}

export default App;
