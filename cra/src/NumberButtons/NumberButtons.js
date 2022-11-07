import { useState } from 'react';

const numbers = [2, 8, 4, 7];
const initial = numbers.map(number => {
  return { start: number, current: 0 }
})

const NumberButtons = ({ operator, setOperator }) => {
  const [number, setNumber] = useState();
  const [values, setValues] = useState(initial);

  function onClick(value)
  {
    if(!number && !operator) {
      setNumber(value);
    else if(number && !operator) {
      setNumber(value);
    } else {
      const total = 'calculate'
    }
  }

  return(
    <div className="container text-center h-75 bg-success">
      <div className="row h-100">
        <div className="col-6">
          <button
            className={`btn btn-primary w-100 h-100`} 
              onClick={() => onClick(value}
          >
            {values[0].start}
          </button>
        </div>

        <div className="col-6">
          <button 
            className={`btn btn-primary w-100 h-100`} 
            onClick={() => {
              // onClick(numbers[1])
            }}
          >
           {values[1].start}
          </button>
        </div>

        <div className="col-6">
            <button 
              className={`btn btn-primary w-100 h-100`} 
              onClick={() => {
                // onClick(numbers[2])
              }}
            >
              {values[2].start}
            </button>
        </div>

        <div className="col-6">
          <button 
            className={`btn btn-primary w-100 h-100 `} 
            onClick={() => {
              // onClick(numbers[3])
            }}
          >
            {values[3].start}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NumberButtons
