const Operators = ({operatorPressed}) => {

    return (
        <div className="container text-center h-25 bg-info">
            <div className="row align-items-center h-50">
                <div className="col">
                    <button type="button" className={`btn btn-primary text-white w-100 h-100`} onClick={()=>operatorPressed('+')}>+</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-primary w-100 h-100" onClick={()=>operatorPressed('-')}>-</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-primary w-100 h-100" onClick={()=>operatorPressed('X')}>X</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-primary w-100 h-100" onClick={()=>operatorPressed('/')}>/</button>
                </div>
            </div>
            <div className="row align-items-center h-50">
                    <div className="col">
                        <button type="button" className="btn btn-primary text-white w-100 h-100">←</button>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-primary w-100 h-100">⊕</button>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-primary w-100 h-100">⨂</button>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-primary w-100 h-100">→</button>
                    </div>
            </div>
        </div>
    );
}


export default Operators