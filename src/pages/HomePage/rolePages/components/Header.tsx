import React, { FC } from "react";
import { useHistory } from "react-router-dom";

import {
  HeaderWrapper,
  Logo,
  UserInfo,
  ButtonExit,
} from "./styles/HeaderStyle";

const Header: FC = () => {
  const history = useHistory();

  return (
    <HeaderWrapper>
      <Logo src={process.env.PUBLIC_URL + "/image/logo.svg"} alt="Logo" />

      <UserInfo>
        <ButtonExit onClick={() => history.push("/login")}> X </ButtonExit>
      </UserInfo>
    </HeaderWrapper>
  );
};

export default Header;
