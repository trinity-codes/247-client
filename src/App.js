import './App.css';
import Navbar from './Navbar/Navbar.js'
import NumberButtons from './NumberButtons/NumberButtons';
import Operators from './Operators/Operators'
import { useState } from 'react';

const numbers = [2, 8, 4, 7];

function App() { 

  return (
    <div className='container align-items-center vh-100 bg-dark p-0'>
      <Navbar />
      <div className='row align-items-center h-100'>
        <div className='content container w-50'>
          <div className="container text-center h-75 bg-success">
            <NumberButtons numbers={numbers} />
          </div>
            <Operators />
        </div>
      </div>
    </div>
  );
}



export default App;
