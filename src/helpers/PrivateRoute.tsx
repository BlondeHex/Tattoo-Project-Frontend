import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAsync } from "react-use";
import Cookies from "js-cookie";
import axios from "axios";

import { GET_USER_REQUEST } from "../constants/api";
import HomePage from "../pages/HomePage";

const PrivateRoute: FC<{ path: string }> = ({ ...rest }) => {
  const { value, error, loading } = useAsync(
    () =>
      axios
        .post(GET_USER_REQUEST, Cookies.get("token"))
        //But I don't shure it's correct
        .then(({ data }: { data: { user: { role: number } } }) => data),
    [GET_USER_REQUEST]
  );
  // It was a stupid mistake, because of inattention
  // But I read more about the work of promise and async
  if (error) return <Redirect to="/" />;

  if (loading) return <div>Is Loading</div>;
  return (
    <Route
      {...rest}
      render={(props) =>
        value !== undefined ? (
          // I don't want to go to the cauldron/caldron in hell:D
          <HomePage {...props} role={value.user.role} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
