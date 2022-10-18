import './App.css';
import Navbar from './Navbar/Navbar.js'
import NumberButtons from './NumberButtons/NumberButtons';
import Operators from './Operators/Operators'
import { useState } from 'react';
import Timer from './Timer/Timer';

const numbers = [2, 8, 4, 7];

function App() { 
  // comment
  const [btn, setBtn] = useState()
  const [operator, setOperator] = useState()
  const [totals, setTotals] =useState([])
  console.log(btn)
  console.log(operator)
  console.log(totals)
  function numberPressed(value){
    setBtn(value)
    if (totals.length <= 1){

      setTotals([value])
    }
    
  }
  function operatorPressed(value){
    setOperator(value)
  }
  

  return (
    <div className='container align-items-center vh-100 bg-dark p-0'>
      <Navbar />
      <div className='row align-items-center h-100'>
        <Timer />
        <div className='content container w-50'>
          <div className="container text-center h-75 bg-success">
            <NumberButtons numbers={numbers} numberPressed={numberPressed} />
          </div>
            <Operators operatorPressed={operatorPressed} />
        </div>
      </div>
    </div>
  );
}



export default App;
