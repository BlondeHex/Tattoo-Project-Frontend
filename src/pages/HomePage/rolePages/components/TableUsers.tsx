import React from "react";
import { useState } from "react";
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

function TableUsers() {
  const [users, setUsers] = useState(getUserList(5));

  const handleDisconnect = (n: number) => {
    let tmp = Array.from(users);
    tmp[n].status = {
      info: "Offline",
      isOnline: false,
    };
    setUsers(tmp);
  };

  //I don't sure but it looks better
  const handleDelete = (n: number) => {
    let tmp = Array.from(users);
    _.remove(tmp, tmp[n]);
    setUsers(tmp);
  };

  const table = users.map((el, index) => (
    <tr key={index}>
      <td>
        <Icon src={el.avatar} alt="Icon" />
      </td>
      <td> {el.login}</td>
      <td> {el.role} </td>
      <td> {el.status.info} </td>
      <td>
        <BtnDisconnect
          disabled={!el.status.isOnline}
          onClick={() => {
            handleDisconnect(index);
          }}
        >
          Dissconect
        </BtnDisconnect>
        <BtnDelete
          onClick={() => {
            handleDelete(index);
          }}
        >
          X
        </BtnDelete>
      </td>
    </tr>
  ));

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
