import React, { Component } from 'react';
import http from '../utils/BaseHttpClient'
class AxiosPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData:[]
          }
    }
    componentDidMount(){
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
        const { tableData} = this.state;
        return (<div>
             { tableData.map((item, i) => {
                return (<div>{item.key}--{item.words}--{item.activity}</div>)
              })}
        </div>);
        // return (<div>第三个页面 Axios</div>);
    }
}
 
export default AxiosPage;