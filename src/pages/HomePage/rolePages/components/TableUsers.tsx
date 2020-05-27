import React, { useState } from "react";
import { useList } from "react-use";
import _ from "lodash";

import {
  ContainerListUsers,
  InputFind,
  ButtonFind,
  WrapperFind,
  Table,
  Icon,
  BtnDisconnect,
  BtnDelete,
  Tittle,
} from "./styles/TableUsersStyle";
import { getUserList } from "../../../../data/fakeUserList";
import UserInfo from "./UserInfo";

function TableUsers() {
  const [users, { updateAt, removeAt }] = useList(getUserList(15));
  const [activeRow, setActiveRow] = useState(-1);

  const handleDisconnect = (n: number) => {
    let user = users[n];
    updateAt(n, {
      ...user,
      status: { info: "Offline", isOnline: false },
    });
  };

  const handleDelete = (n: number) => {
    return () => {
      removeAt(n);
      setActiveRow(-1);
    };
  };

  const table = users.map((el, index) => {
    return (
      <React.Fragment key={index}>
        <tr
          onClick={() => setActiveRow(index)}
          className={activeRow === index ? "active" : ""}
        >
          <td>
            <Icon src={el.avatar} alt="Icon" />
          </td>
          <td> {el.login}</td>
          <td> {el.role} </td>
          <td> {el.status.info} </td>
        </tr>
        <tr>
          {activeRow === index && (
            <td colSpan={4}>
              <UserInfo
                delete={handleDelete(index)}
                portfolio={el.portfolio}
                profile={el.profile}
              />
            </td>
          )}
        </tr>
      </React.Fragment>
    );
  });

  return (
    <ContainerListUsers>
      <WrapperFind>
        <Tittle>All Users</Tittle>
      </WrapperFind>
      <Table>
        <tbody>{table}</tbody>
      </Table>
    </ContainerListUsers>
  );
}

export default TableUsers;
