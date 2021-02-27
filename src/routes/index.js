import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CountriePage from '../pages/countrie';
import HomePage from '../pages/home';

function Routes() {
  return (
      <BrowserRouter>
        <Switch>
             <Route path="/" component={HomePage} exact />
             <Route path="/countrie/:slug" component={CountriePage} exact/>
        </Switch>
      </BrowserRouter>
  )
}

export default Routes;