import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar.js'

function App() { 
  // loop numbers and display columns
  const numbers = [2, 8, 4, 7];

  return (
    <div className='container align-items-center vh-100 bg-dark p-0'>

      {/* Navbar */}
      <Navbar />


      {/* MAIN CONTENT */}
      <div className='row align-items-center h-100'>
        <div className='container h-75 w-50'>

          {/* NUMBER BUTTONS */}
          <div className="container text-center h-75 bg-success">
            <div className="row h-100">
              <NumberButtons />
            </div>
          </div>

          {/* OPERATION */}
          <div className="container text-center h-25 bg-info">
            
            {/* OPERATION SYMBOLS */}
            <div className="row align-items-center h-50">
              <div className="col">
                <button type="button" className="btn btn-primary text-white w-100 h-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                  </svg>
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-primary w-100 h-100"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-dash-lg text-light" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                </svg>
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-primary w-100 h-100">X</button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-primary w-100 h-100">/</button>
              </div>
            </div>

            {/* More Operations */}
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
        </div>
      </div>
    </div>
  );
}

function NumberButtons()
{
  const numbers = [2, 8, 4, 7];

  return numbers.map(number => (
    <div className="col-6">
    <button type="button" className="btn btn-primary w-100 h-100 border border-warning bg-white text-dark">{number}</button>
  </div>
    
  ));
}

export default App;
