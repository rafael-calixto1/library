import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavBarAndFooter/Navbar';
import { Footer } from './layouts/NavBarAndFooter/Footer';
import { HomePage } from './layouts/HomePage/components/HomePage';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { Redirect, Route, Switch } from 'react-router-dom';
import { BookCheckoutPage } from './layouts/BookCheckoutPage/BookCheckoutPage';

export const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar />
      <div className="flex-grow-1">
        <Switch>
          <Route path='/search' exact>
            <SearchBooksPage />
          </Route>

          <Route path='/checkout/:bookId'>
            <BookCheckoutPage />
          </Route>

          <Route path='/home' exact>
            <HomePage />
          </Route>

          <Route path='/'>
            <Redirect to="/home" />
          </Route>
          <Route path='/checkout/:bookId'>
            <BookCheckoutPage/>
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}
