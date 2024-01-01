import React from 'react';
import './App.css';
import { ExploreTopBooks } from './layouts/navbar/ExploreTopBooks';
import { Carousel } from './layouts/Carousel';
import { Navbar } from './layouts/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <ExploreTopBooks/>
      <Carousel></Carousel>
    </div>
    );
}

export default App;