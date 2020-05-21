import React, { FC } from "react";

import AdminPage from "./rolePages/AdminPage";

// In future add role enum
// Think, parsing number to check role isn't good
const HomePage: FC<{ role: number }> = ({ role }) => {
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
