import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAsync } from "react-use";
import Cookies from "js-cookie";

import { GET_USER_REQUEST } from "../constants/api";
import HomePage from "../pages/HomePage";

const PrivateRoute: FC<{
  path: string;
}> = ({ ...rest }) => {
  const { value, error, loading } = useAsync(async () => {
    const response = await fetch(GET_USER_REQUEST, {
      method: "POST",
      body: JSON.stringify(Cookies.get("token")),
    });
    const result = await response.text();
    return result;
  }, [GET_USER_REQUEST]);

  console.log(error);

  if (error) return <Redirect to="/" />;

  if (loading) return <div>Is Loading</div>;

  return (
    <Route
      {...rest}
      render={(props) =>
        value !== null ? (
          <HomePage {...props} user={value} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
