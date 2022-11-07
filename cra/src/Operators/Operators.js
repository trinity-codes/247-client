import React from 'react';
import icons from '../icons/icons';

const Operators = ({setOperator}) => {
  
  function onClick(value)
  {
    setOperator(value)
  }

  return (
    <div className="container text-center h-25 bg-info">
      <div className="row align-items-center h-50">
        <div className="col">
          <button 
            className={`btn btn-primary text-white w-100 h-100`} 
            onClick={() => onClick("+")}
          >
            {icons.plus}
          </button>
        </div>

        <div className="col">
            <button
              className="btn btn-primary w-100 h-100" 
              onClick={() => onClick("-")}
            >
              {icons.minus}
            </button>
        </div>

        <div className="col">
            <button 
              className="btn btn-primary w-100 h-100" 
              onClick={() => onClick("*")}
            >
              {icons.multiple}
            </button>
        </div>

        <div className="col">
            <button 
              className="btn btn-primary w-100 h-100" 
              onClick={() => onClick("/")}
            >
              {icons.divide}
            </button>
        </div>
      </div>

      <div className="row align-items-center h-50">
        <div className="col">
            <button 
              className="btn btn-primary text-white w-100 h-100"
              onClick={() => onClick("b")}
            >
              {icons.back}
            </button>
        </div>
        <div className="col">
            <button 
              className="btn btn-primary w-100 h-100"
              onClick={() => onClick("a")}
            >
              {icons.plusCircle}
            </button>
        </div>
        <div className="col">
            <button
              className="btn btn-primary w-100 h-100"
              onClick={() => onClick("m")}
            >
              {icons.multipleCircle}  
            </button>
        </div>
      </div>
    </div>
  );
};


export default Operators;
