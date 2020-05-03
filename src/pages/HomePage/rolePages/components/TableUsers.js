import React from 'react'
import {useState} from 'react';

import {ContainerListUsers, InputFind, ButtonFind, WrapperFind, Table, Icone, BtnDisconnect, BtnDelete, Tittle} from './styles/TableUsersStyle'
import { element } from 'prop-types';

const fakeUsers = [
  {
    login: 'User12345',
    role: 'Admin',
    status: {
      info: 'Online',
      bool: false
    }
  }, 
  {
    login: 'TattoMater9999',
    role: 'Master',
    status: {
      info: 'Online',
      bool: false
    }
  },
  {
    login: 'User',
    role: 'User',
    status: {
      info: 'Offline',
      bool: true
    }
  },
  {
    login: 'Studia555',
    role: 'Admin',
    status: {
      info: 'Online',
      bool: false
    }
  }, 
  {
    login: 'User12345',
    role: 'Admin',
    status: {
      info: 'Online',
      bool: false
    }
  }, 
  {
    login: 'TattoMater9999',
    role: 'Master',
    status: {
      info: 'Online',
      bool: false
    }
  },
  {
    login: 'User',
    role: 'User',
    status: {
      info: 'Offline',
      bool: true
    }
  },
  {
    login: 'Studia555',
    role: 'Admin',
    status: {
      info: 'Online',
      bool: false
    }
  },
  {
    login: 'User12345',
    role: 'Admin',
    status: {
      info: 'Online',
      bool: false
    }
  }, 
  {
    login: 'TattoMater9999',
    role: 'Master',
    status: {
      info: 'Online',
      bool: false
    }
  },
  {
    login: 'User',
    role: 'User',
    status: {
      info: 'Offline',
      bool: true
    }
  },
  {
    login: 'Studia555',
    role: 'Admin',
    status: {
      info: 'Online',
      bool: false
    }
  }
]


function TableUsers(){
  const [users, setUsers] = useState(fakeUsers);

  const handleDisconnect = (n) => {
    let test = Array.from(users);
    test[n].status.bool = true;
    test[n].status.info = 'Offline';
    setUsers(test);
  }

  const handleDelete = (n) => {
    let test = Array.from(users);
    test = test.filter((el)=>{
      return el.login!==users[n].login
    })
    setUsers(test);
  }

  //Remove 
  const table =
  users.map((el, index)=>
      <tr key={index}>
        <td> <Icone src={process.env.PUBLIC_URL + '/image/user-icone.svg'} alt="Icone" /></td>
        <td> {el.login}</td>
        <td> {el.role} </td>
        <td> {el.status.info} </td>
        {/* Change char to svg */}
        <td> 
          <BtnDisconnect disabled={el.status.bool} onClick={()=>{handleDisconnect(index)}}>Dissconect</BtnDisconnect> 
          <BtnDelete onClick={()=>{handleDelete(index)}}>X</BtnDelete></td>
      </tr>
    )

  return(

        <ContainerListUsers>
           <WrapperFind>
            <Tittle>All Users</Tittle>
            <InputFind placeholder="Search"/>
            <ButtonFind> Find</ButtonFind>
          </WrapperFind>
          <Table>
            <tbody>
             {table}
            </tbody>
          </Table>
          
        </ContainerListUsers>
  )
}

export default TableUsers;