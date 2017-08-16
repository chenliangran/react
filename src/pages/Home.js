import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router';
import Joblist from '../components/Joblist';
import './Home.css';

class Home extends Component {
    constructor(props){
    super();
  }
  render() {
    return (
      <div>
        <div className="info">
                10秒钟定制职位
         <Link to="/login" className="">去登录</Link>      
        </div>
        <Joblist />
      </div>
    );
  }
}

export default Home;
