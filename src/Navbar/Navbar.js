import React, { useState } from 'react';

const Navbar = () => {
  const [tab, setTab] = useState('home');
  console.log(tab)
  return <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">24-Seven</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <button class="nav-link active" aria-current="page" onClick={()=> setTab('home')}>Home</button>
            
          </li>
          <li class="nav-item">
            <button class="nav-link" onClick={()=> setTab('help')}>Help</button>
          </li>
          <li class="nav-item">
            <button class="nav-link" onClick={()=> setTab('statistics')}>Statistics</button>

          </li>
          <li class="nav-item">
            <button class="nav-link" onClick={()=> setTab('setting')}>Setting</button>

          </li>
        </ul>
      </div>
    </div>
  </nav>
}

export default Navbar