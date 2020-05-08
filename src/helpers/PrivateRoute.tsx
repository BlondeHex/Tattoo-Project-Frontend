import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAsync } from "react-use";
import Cookies from "js-cookie";
import axios from "axios";

import { GET_USER_REQUEST } from "../constants/api";
import HomePage from "../pages/HomePage";

const PrivateRoute: FC<{ path: string }> = ({ ...rest }) => {
  const { value, error, loading } = useAsync(async () => {
    await axios
      .post(GET_USER_REQUEST, Cookies.get("token"))
      .then((res) => {
        return res;
      })
      .catch((error) => console.log(error));
  }, [GET_USER_REQUEST]);

  console.log(error);

  if (error) return <Redirect to="/" />;

  if (loading) return <div>Is Loading</div>;
  return (
    <Route
      {...rest}
      render={(props) =>
        value !== null ? (
          <HomePage {...props} role={1} />
        ) : (
          //I need to do so
          // role={value.role} />
          //But now ts hates me :(
          //I fix it later
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
