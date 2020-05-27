import React from "react";

import { PageWrapper, MainWrapper } from "../HomePageStyles";
import TableUsers from "./components/TableUsers";
import Header from "./components/Header";

function AdminPage() {
  return (
    <PageWrapper>
      <Header />

      <MainWrapper>
        <TableUsers />
      </MainWrapper>
    </PageWrapper>
  );
}

export default AdminPage;
