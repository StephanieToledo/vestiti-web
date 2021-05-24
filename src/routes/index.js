import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import HomeCard from '../components/HomeCard';
import Home from '../pages/Home';
import Register from '../pages/Register';

const Routes = () => {
  return(
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={HomeCard} path="/products" />
      <Route component={Register} path="/register" />
    </BrowserRouter>
  )
}

export default Routes;