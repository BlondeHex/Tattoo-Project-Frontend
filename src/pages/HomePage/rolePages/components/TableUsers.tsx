import React from "react";
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

  const handleDisconnect = (n: number) => {
    let user = users[n];
    updateAt(n, {
      ...user,
      status: { info: "Offline", isOnline: false },
    });
  };

  const handleDelete = (n: number) => {
    removeAt(n);
  };

  const table = users.map((el, index) => {
    return (
      <React.Fragment key={index}>
        <tr onClick={() => {}}>
          <td>
            <Icon src={el.avatar} alt="Icon" />
          </td>
          <td> {el.login}</td>
          <td> {el.role} </td>
          <td> {el.status.info} </td>
        </tr>
        <tr>
          <td colSpan={4}>
            <UserInfo profile={el.profile} />
          </td>
        </tr>
      </React.Fragment>
    );
  });

  return (
    <ContainerListUsers>
      <WrapperFind>
        <Tittle>All Users</Tittle>
        <InputFind placeholder="Search" />
        <ButtonFind> Find</ButtonFind>
      </WrapperFind>
      <Table>
        <tbody>{table}</tbody>
      </Table>
    </ContainerListUsers>
  );
}

export default TableUsers;
