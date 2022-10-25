import { useState } from 'react';

import NumberButtons from '../NumberButtons/NumberButtons';
import Operators from '../Operators/Operators'

const numbers = [2, 8, 4, 7];

const initial = numbers.map(number =>{
    return { start: number, current: 0 }
})

function Interaction(){

    const [operator, setOperator] = useState();
    const [values, setValues] = useState(initial);
    //value changes when number is pressed
    console.log(operator);
    console.log(values);

    return (
        <div className='content container w-50'>
            <NumberButtons values={values} setValues={setValues} />
            <Operators setOperator={setOperator}/>
        </div>
    )
  }


  export default Interaction;