import React, { FC } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import CustomBrowserRouter from "./helpers/CustomBrowserRouter";
import { LOGIN, HOME } from "./constants/routes";
import PrivateRoute from "./helpers/PrivateRoute";

const App: FC = () => {
  return (
    <CustomBrowserRouter>
      <Switch>
        <Route exact path={LOGIN} component={LoginPage} />
        <PrivateRoute path={HOME} />
        <Redirect from="*" to={LOGIN} />
      </Switch>
    </CustomBrowserRouter>
  );
};

export default App;
