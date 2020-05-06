import React from "react";
import { useState } from "react";

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
    let test = Array.from(users);
    test[n].status.isOnline = false;
    test[n].status.info = "Offline";
    setUsers(test);
  };

  const handleDelete = (n: number) => {
    let test = Array.from(users);
    test = test.filter((el) => {
      return el.login !== users[n].login;
    });
    setUsers(test);
  };

  //Remove
  const table = users.map((el, index) => (
    <tr key={index}>
      <td>
        {" "}
        <Icon src={el.avatar} alt="Icon" />
      </td>
      <td> {el.login}</td>
      <td> {el.role} </td>
      <td> {el.status.info} </td>
      {/* Change char to svg */}
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
