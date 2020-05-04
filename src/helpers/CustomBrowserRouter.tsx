import React, { FC } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import history from "./history";

export const RouterContext = React.createContext({});

const CustomBrowserRouter: FC = ({ children }) => (
  <BrowserRouter>
    <Route {...{ history }}>
      {(routeProps) => (
        <RouterContext.Provider value={routeProps}>
          {children}
        </RouterContext.Provider>
      )}
    </Route>
  </BrowserRouter>
);

export default CustomBrowserRouter;
