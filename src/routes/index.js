import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import HomeCard from '../components/HomeCard';
import Home from '../pages/Home';

const Routes = () => {
  return(
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={HomeCard} path="/products" />
    </BrowserRouter>
  )
}

export default Routes;