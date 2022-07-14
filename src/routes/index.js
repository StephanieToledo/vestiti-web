import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import HomeCard from '../components/HomeCard';
import Home from '../pages/Home';
import RegisterStepOne from '../components/RegisterStepOne';
import RegisterStepTwo from '../components/RegisterStepTwo';
import RegisterStepThree from '../components/RegisterStepThree';
import Login from '../components/Login';
import { Cart } from '../pages/Cart';

const Routes = () => {
  return(
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={HomeCard} path="/products" />
      <Route component={RegisterStepOne} path="/register-step-one" />
      <Route component={RegisterStepTwo} path="/register-step-two" />
      <Route component={RegisterStepThree} path="/register-step-three" />
      <Route component={Login} path="/login" />
      <Route component={Cart} path="/cart" />
    </BrowserRouter>
  )
}

export default Routes;