import { useState } from 'react';

const NumberButtons = ({numbers}) => {

  const [selected, setSelected] = useState();

  return(
    <div className="row h-100">
      <div className="col-6">
        <button type="button" className={`btn btn-primary w-100 h-100 ${selected==0 ? 'active' : ''}`} onClick={() => {
          setSelected(0)
          }}>
          {numbers[0]}
        </button>
      </div>

      <div className="col-6">
        <button type="button" className={`btn btn-primary w-100 h-100 ${selected==1 ? 'active' : ''}`} onClick={() => {
          setSelected(1)
          }}>
          {numbers[1]}
        </button>
      </div>

      <div className="col-6">
          <button type="button" className={`btn btn-primary w-100 h-100 ${selected==2 ? 'active' : ''}`} onClick={() => {
            setSelected(2)
            }}>
            {numbers[2]}
          </button>
      </div>

      <div className="col-6">
        <button type="button" className={`btn btn-primary w-100 h-100 ${selected==3 ? 'active' : ''}`} onClick={() => {
          setSelected(3)
          }}>
          {numbers[3]}
        </button>
      </div>
    </div>
  );
      
}

export default NumberButtons
