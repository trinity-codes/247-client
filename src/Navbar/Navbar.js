import { useState } from 'react';

const Navbar = () => {
  const [tab, setTab] = useState('home');
  console.log(tab)

  return (
    <div className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div className="d-flex w-100">
        <button className="btn btn-light" onClick={()=> setTab('home')}>
            Home
          </button>      
          <button className="btn btn-light" onClick={()=> setTab('help')}>
            Help
          </button>
          <button className="btn btn-light" onClick={()=> setTab('statistics')}>
            Statistics
          </button>
        </div>

        </div>
        </div>
  );
}

export default Navbar