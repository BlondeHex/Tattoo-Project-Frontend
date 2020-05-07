import React, { FC } from "react";

import AdminPage from "./rolePages/AdminPage";

export interface Props {
  user: any;
}

const HomePage: FC<Props> = ({ user }) => {
  //const role = user.role;
  switch (1) {
    case 1:
      return <AdminPage />;
    // case 2:
    //   return <UserPage />;
    default:
      return null;
  }
};

export default HomePage;
