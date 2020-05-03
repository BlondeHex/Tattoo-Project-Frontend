import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PropTypes from "prop-types";
import history from './history';

export const RouterContext = React.createContext({});

const CustomBrowserRouter = ({ children }) => (
  <BrowserRouter>
    <Route history={history}>
      {routeProps => (
        <RouterContext.Provider value={routeProps}>
          {children}
        </RouterContext.Provider>
      )}
    </Route>
  </BrowserRouter>
);

CustomBrowserRouter.propTypes = {
  children: PropTypes.object.isRequired
};

export default CustomBrowserRouter;
