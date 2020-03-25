import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PropTypes from "prop-types";

const RouterContext = React.createContext({});

const CustomBrowserRoute =({children}) => (
  <BrowserRouter>
    <Route>
      {routeProps => (
        <RouterContext.Provider value={routeProps}>
          {children}
        </RouterContext.Provider>
      )}
    </Route>
  </BrowserRouter>
)

CustomBrowserRoute.propTypes = {
  children: PropTypes.object.isRequired
}

export default CustomBrowserRoute;