import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { loginUser } from "../../actions/loginActions";
import { useActions } from "../../hooks/useAction";
import {
  LoginPage,
  Button,
  FormWrapper,
  Logo,
  InputFormWrapper,
} from "./LoginPageStyles";

function AuthenticationPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  //Alternative bindActionCreators
  const [submitAction] = useActions([loginUser]);

  const history = useHistory();

  const submit = () => {
    if (login !== "" && password !== "") {
      submitAction(login, password);
    }
  };

  return (
    <LoginPage>
      <Logo src={process.env.PUBLIC_URL + "/image/logo.svg"} alt="Logo" />

      <FormWrapper>
        <InputFormWrapper>
          <input onChange={(e) => setLogin(e.target.value)} />
          <label>YourTattoo</label>
        </InputFormWrapper>

        <InputFormWrapper>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </InputFormWrapper>

        {/* <Button onClick={submit}>CONNECT</Button> */}
        <Button onClick={() => history.push("/home")}>CONNECT</Button>
      </FormWrapper>
    </LoginPage>
  );
}

export default AuthenticationPage;
