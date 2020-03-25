import React from 'react';
import {store} from '../store/createStore'
import {Provider} from 'react-redux' 
import { Route, Switch, Redirect } from "react-router-dom";

import CustomBrowserRoute from '../route/CustomBrowserRoute'
import AuthenticationPage from '../AuthenticationPage/index'
import HomePageOne from '../HomePage/HomePageOne'
import HomePageTwo from '../HomePage/HomePageTwo'

function App() {
  return (
    <Provider store={store}>
      <CustomBrowserRoute>
        <Switch>
          <Route exact path='/' component={AuthenticationPage}/>
          <Redirect from="*" to='/' />
        </Switch>
      </CustomBrowserRoute>
    </Provider>
  );
}

export default App;
