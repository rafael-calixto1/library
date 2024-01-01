import React from 'react';
import './App.css';
import { ExploreTopBooks } from './layouts/navbar/ExploreTopBooks';
import { Carousel } from './layouts/Carousel';
import { Navbar } from './layouts/Navbar';
import { Heros } from './layouts/Heros';
import { LibraryServices } from './layouts/LibraryServices';

function App() {
  return (
    <div>
      <Navbar/>
      <ExploreTopBooks/>
      <Carousel></Carousel>
      <Heros/>
      <LibraryServices/>
    </div>
    );
}

export default App;