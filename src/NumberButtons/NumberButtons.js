import { useState } from 'react';


const NumberButtons = ({ values, setValues}) => {

  console.log(values);
  // function onClick(value) {
  //   setValues(value)
  // }

  return(
    <div className="container text-center h-75 bg-success">
      <div className="row h-100">
        <div className="col-6">
          <button
            className={`btn btn-primary w-100 h-100`} 
            onClick={() => {
              // onClick(numbers[0])
            }}
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
