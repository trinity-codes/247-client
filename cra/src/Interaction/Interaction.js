import { useState } from 'react';
import NumberButtons from '../NumberButtons/NumberButtons';
import Operators from '../Operators/Operators'

function Interaction() {
  const [operator, setOperator] = useState();

  return (
    <div className='content container w-50'>
      <NumberButtons operator={operator} setOperator={setOperator} />
      <Operators setOperator={setOperator}/>
    </div>
  )
}


export default Interaction;
