import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import HomeCard from '../components/HomeCard';
import Home from '../pages/Home';
import RegisterStepOne from '../components/RegisterStepOne';
import RegisterStepTwo from '../components/RegisterStepTwo';

const Routes = () => {
  return(
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={HomeCard} path="/products" />
      <Route component={RegisterStepOne} path="/register-step-one" />
      <Route component={RegisterStepTwo} path="/register-step-two" />
    </BrowserRouter>
  )
}

export default Routes;