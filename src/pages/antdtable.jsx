import React, { Component } from 'react';
import http from '../utils/BaseHttpClient';
import { Table } from 'antd';
class AntdTable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tableData:[]
         }
    }
    componentDidMount () {
        this.getList();
    }
    //主页列表函数
    getList = () => {
        http({
          method: 'get',
          url: '/mock/getData',
          data: {
          }
        }).then((res) => {
          console.log(res.data.data);
          this.setState({
            tableData: res.data.data
          })
        })
      }
    render() { 
        const { tableData } = this.state;
        const columns = [
            {
              title: '姓名',
              dataIndex: 'key',
              key: 'key',
            },
            {
              title: '年龄',
              dataIndex: 'words',
              key: 'words',
            },
            {
              title: '住址',
              dataIndex: 'activity',
              key: 'activity',
            },
          ];
        return (<div>
            <Table dataSource={tableData} columns={columns} />
        </div>  );
    }
}
 
export default AntdTable;