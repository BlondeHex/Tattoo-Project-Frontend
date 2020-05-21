import React from "react";

import { HomeWrapper } from "../HomePageStyles";
import TableUsers from "./components/TableUsers";
import Header from "./components/Header";

function AdminPage() {
  return (
    <HomeWrapper>
      <Header />
      <TableUsers />
    </HomeWrapper>
  );
}

export default AdminPage;
