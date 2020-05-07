import React, { useState, FC } from "react";
import { useHistory } from "react-router-dom";
import { useAsyncFn } from "react-use";
import Cookies from "js-cookie";

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

  const [state, sendRequest] = useAsyncFn(async () => {
    let requestHeaders: any = { "Content-Type": "application/json" };
    const response = await fetch(LOGIN_REQUEST, {
      method: "POST",
      headers: requestHeaders,
      body: JSON.stringify({ login, password }),
    });
    const result = await response.text();
    return result;
  }, [LOGIN_REQUEST, login, password]);

  const history = useHistory();
  const handleSubmit = () => {
    sendRequest();
    Cookies.set("token", String(state.value));
  };

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
        <Button onClick={handleSubmit}>CONNECT</Button>
      </FormWrapper>
    </LoginPage>
  );
};

export default AuthenticationPage;
