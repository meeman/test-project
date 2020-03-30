import React, { useContext } from 'react'
// import { Table, Button } from 'antd';
import { DeleteTwoTone } from '@ant-design/icons';
import { UserContext } from './context/user-context';
import { Table } from 'react-bootstrap';


export default function UserTable() {
  const { userData, dispatch } = useContext(UserContext)

  const deleteUser = id => {
    dispatch({
      type: "DELETE_USER",
      payload: id
    })
  }
  
  
  return (
    <Table responsive hover >
      <thead className="thead">
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Password</th>
          <th style={{textAlign: 'center'}}>Action</th>
        </tr>
      </thead>
      <tbody className="tbody">
        {userData.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td style={{textAlign: 'center'}}>
              <a onClick={() => deleteUser(user.id)}>
                <DeleteTwoTone twoToneColor="#ff1919" style={{ fontSize: '18px' }} />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

 
  // const columns = [
  //   { title: 'ID', dataIndex: 'id', key: 'id' },
  //   { title: 'Username', dataIndex: 'username' },
  //   { title: 'Email', dataIndex: 'email' },
  //   { title: 'Password', dataIndex: 'password' },
  //   { title: 'Action',
  //     dataIndex: 'Action',
  //     render: () => (
  //       <Button
  //         shape="circle" 
  //         danger 
  //         icon={<DeleteTwoTone twoToneColor="#ff1919"/>}
  //         onClick={() => deleteUser()}
  //       />
  //     )
  //   }
  // ];

      // <Table
    //   scroll={{ y: 400 }}
    //   dataSource = {data}
    //   columns={columns}
    //   rowKey="id"
    // /> 