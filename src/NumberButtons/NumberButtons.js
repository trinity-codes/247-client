import { useState } from 'react';

const NumberButtons = ({numbers, numberPressed}) => {

  const [selected, setSelected] = useState();

  return(
    <div className="row h-100">
      <div className="col-6">
        <button type="button" className={`btn btn-primary w-100 h-100 ${selected==0 ? 'active' : ''}`} onClick={() => {
          setSelected(0)
          numberPressed(numbers[0])
          }}>
          {numbers[0]}
        </button>
      </div>

      <div className="col-6">
        <button type="button" className={`btn btn-primary w-100 h-100 ${selected==1 ? 'active' : ''}`} onClick={() => {
          setSelected(1)
          numberPressed(numbers[1])
          }}>
          {numbers[1]}
        </button>
      </div>

      <div className="col-6">
          <button type="button" className={`btn btn-primary w-100 h-100 ${selected==2 ? 'active' : ''}`} onClick={() => {
            setSelected(2)
            numberPressed(numbers[2])}
            }>
            {numbers[2]}
          </button>
      </div>

      <div className="col-6">
        <button type="button" className={`btn btn-primary w-100 h-100 ${selected==3 ? 'active' : ''}`} onClick={() => {
          setSelected(3)
          numberPressed(numbers[3])
          }}>
          {numbers[3]}
        </button>
      </div>
    </div>
  );
      
}

export default NumberButtons
