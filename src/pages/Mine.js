import React, { Component } from 'react';
import {Link,IndexLink,browserHistory} from 'react-router';
import './Mine.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
class Mine extends Component{
	constructor(props){
		super(props);
		this.state={
			show:false,
			user:""
		}
		this.outClick = this.outClick.bind(this);
	}

 componentWillMount(){
 	 var _user = localStorage.getItem("user"); 
		if(_user){
			this.setState({user:JSON.parse(_user).name});

          	this.setState({show: true});
		} else{
			this.setState({show: false});
		}
 }

	render(){
      
		return(
			<div id="box">
				<div className="loginbox">
					<li className="login">
						<Link to="/login" className="login_user" style={{display:this.state.show?"none":"block"}}>登录 / 注册</Link>
						<Link to="" style={{display:this.state.show?"block":"none"}} className="username">{this.state.user + " 您好!"}</Link>
					</li>
					
				</div>
				<div className="buttons">
					<li className="button toudi"><Link to="">投递</Link></li>
					<li className="button mianshi"><Link to="">面试</Link></li>
					<li className="button yaoyue"><Link to="">邀约</Link></li>
					<li className="button shoucang"><Link to="">收藏</Link></li>
				</div>	
				<p id="loginout" onClick={this.outClick} style={{display:this.state.show?"block":"none"}}>退出登录</p>
				
			</div>

		)	
	}
	outClick(e){
		localStorage.removeItem("user")
		this.setState({show: false});
	}

}
export default Mine;