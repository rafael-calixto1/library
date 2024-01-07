import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavBarAndFooter/Navbar';
import { Footer } from './layouts/NavBarAndFooter/Footer';
import { HomePage } from './layouts/HomePage/components/HomePage';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { Redirect, Route, Switch } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Navbar/>  
      <Switch>
  
        <Route path='/' exact>
          <Redirect to = "/home"/>
        </Route>
        
        <Route>
          <HomePage></HomePage>
        </Route>
 
        <Route path='/search'>
          <SearchBooksPage/>
        </Route>
     
      </Switch>
     
      <Footer/> 
    </>
    );
}
