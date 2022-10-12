const NumberButtons = ({numbers}) => {
  return(
    <div className="row h-100">
      <div className="col-6">
        <button type="button" className="btn btn-primary w-100 h-100 border border-warning bg-white text-dark">
          {numbers[0]}
        </button>
      </div>

      <div className="col-6">
        <button type="button" className="btn btn-primary w-100 h-100 border border-warning bg-white text-dark">
          {numbers[1]}
        </button>
      </div>

      <div className="col-6">
          <button type="button" className="btn btn-primary w-100 h-100 border border-warning bg-white text-dark">
            {numbers[2]}
          </button>
      </div>

      <div className="col-6">
        <button type="button" className="btn btn-primary w-100 h-100 border border-warning bg-white text-dark">
          {numbers[3]}
        </button>
      </div>
    </div>
  );
      
}

export default NumberButtons
