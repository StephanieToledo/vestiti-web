import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import HomeCard from '../components/HomeCard';
import Home from '../pages/Home';
import Register from '../pages/Register';
import RegisterStepTwo from '../components/RegisterStepTwo';
import RegisterStepTree from '../components/RegisterStepTree';
import FinishRegister from '../components/FinishRegister';

const Routes = () => {
  return(
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={HomeCard} path="/products" />
      <Route component={Register} path="/register" />
      <Route component={RegisterStepTwo} path="/register-step-two" />
      <Route component={RegisterStepTree} path="/register-step-tree" />
      <Route component={FinishRegister} path="/finish-register" />
    </BrowserRouter>
  )
}

export default Routes;