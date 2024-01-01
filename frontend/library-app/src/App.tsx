import React from 'react';
import './App.css';
import { ExploreTopBooks } from './layouts/navbar/ExploreTopBooks';
import { Navbar } from './layouts/navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <ExploreTopBooks/>
    </div>
    );
}

export default App;
