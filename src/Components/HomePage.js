import React from 'react'
import UserTable from './UserTable'
import { Tabs } from 'antd';
import { Link } from 'react-router-dom'
import { PoweroffOutlined } from '@ant-design/icons';
import ApiTable from './ApiTable';


export default function HomePage() {
  const { TabPane } = Tabs;
  
  return (
    <div className="tableBg">
      <div className="navbar">
        <h3 className="navTitle1">Home</h3>
        <Link className="navContainer" to="/">
          <h6 className="navTitle2">Login Page</h6>
          <PoweroffOutlined className="navIcon"/>
        </Link>
      </div>
      <div className="tableCont">
        <Tabs className="listTitle" type="card">
          <TabPane  tab="Users Data Table" key="1">
            <UserTable />
          </TabPane>
          <TabPane tab="API Data Table" key="2">
            <ApiTable /> 
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}


