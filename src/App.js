import React from 'react';
import Navbar from './components/Navbar';
import Text from './components/Text'
import Card from './components/card'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import images from './assets/images';
import './components/style.css'

function App() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  return (
    <div>
      <Navbar />
      <div id='header' className='display-2 text-center'>Hi, Welcome to my Daily Web Page👋</div>
      <div id='header' className='display-4 text-center'>Today is {dd}/{mm}/{yyyy}.Rise and Shine!</div>
      <Text />
      <Card/>

      
    </div>  
  );
}

export default App;
