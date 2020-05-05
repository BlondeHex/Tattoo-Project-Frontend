import React from "react";
import { useState } from "react";

import { HomeWrapper, Menu } from "../HomePageStyles";
import TableUsers from "./components/TableUsers";
import Header from "./components/Header";

function AdminPage() {
  const [isActive, setIsActive] = useState([true, false]);

  //Change
  //Yeap, definitely should change, looks awkward
  let handleMenu = (n: number) => {
    let test = isActive.map((el) => {
      el = false;
      return false;
    });
    test[n] = true;
    setIsActive(test);
  };

  return (
    <HomeWrapper>
      <Header />
      <Menu>
        <button
          onClick={() => {
            handleMenu(0);
          }}
          className={isActive[0] ? "active" : ""}
        >
          All users
        </button>
        <button
          onClick={() => {
            handleMenu(1);
          }}
          className={isActive[1] ? "active" : ""}
        >
          Show Info
        </button>
      </Menu>

      {isActive[0] ? <TableUsers /> : ""}
    </HomeWrapper>
  );
}

export default AdminPage;
