import './App.css';
import Navbar from './Navbar/Navbar.js'
import Interaction from   './Interaction/Interaction'


function App() { 

  return (
    <div className='container align-items-center vh-100 bg-dark p-0'>
      <Navbar />
      <div className='row align-items-center h-100'>
            <Interaction />
      </div>
    </div>
  );
}



export default App;
