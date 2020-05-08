import React, { useState, FC } from "react";
import { useAsyncFn } from "react-use";
import Cookies from "js-cookie";
import axios from "axios";

import { LOGIN_REQUEST } from "../../constants/api";

import {
  LoginPage,
  Button,
  FormWrapper,
  Logo,
  InputFormWrapper,
} from "./LoginPageStyles";

const AuthenticationPage: FC = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  //Should return the result if only need to set token?
  //Also token can be set using header 'Set-Cookie' in response
  //Maybe it's better
  const [state, sendRequest] = useAsyncFn(
    async () =>
      //Axios <3
      await axios
        .post(LOGIN_REQUEST, { login, password })
        .then((res) => Cookies.set("token", res.data))
        .catch((error) => console.log(error)),
    [LOGIN_REQUEST, login, password]
  );

  return (
    <LoginPage>
      <Logo src={process.env.PUBLIC_URL + "/image/logo.svg"} alt="Logo" />

      <FormWrapper>
        <InputFormWrapper>
          <input onChange={(e) => setLogin(e.target.value)} />
          <label>Login</label>
        </InputFormWrapper>

        <InputFormWrapper>
          <input onChange={(e) => setPassword(e.target.value)} />
          <label>Password</label>
        </InputFormWrapper>

        {/* <Button onClick={submit}>CONNECT</Button> */}
        <Button onClick={sendRequest}>CONNECT</Button>
      </FormWrapper>
    </LoginPage>
  );
};

export default AuthenticationPage;
