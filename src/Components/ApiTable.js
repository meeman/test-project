import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Table } from 'antd';
import { LoadingOutlined, AlertTwoTone } from '@ant-design/icons';
import USER_QUERY from './queries/user_query';


const ApiTable = () => {
    const { error, loading, data } = useQuery(USER_QUERY);

    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id'},
        { title: 'Title', dataIndex: 'title', key: 'title' },
        { title: 'Details', dataIndex: 'details', key: 'details' }
      ];
    
    if (loading) return <div><LoadingOutlined className="loading"/></div>
    if (error) 
        return (
            <div className="errorContainer">
                <AlertTwoTone className="errorIcon" twoToneColor="#ff1919"/>
                <h2 className="errorTitle">Something Went Wrong!</h2>
            </div>
        )   
    return (
        <div>
            <Table
                scroll={{ y: 400 }}
                columns={columns}
                dataSource={data.histories}
                rowKey="id"
            />
        </div>
    )
}


export default ApiTable