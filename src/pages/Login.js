import React, { Component } from 'react';
import {Link,IndexLink,browserHistory} from 'react-router';
import './Login.css'
import $ from 'jquery'
class Login extends Component{
	constructor(props){
		super(props);
		this.state={
			detail:"",
			password:"",
			tip:false
		}
		this.handleChange = this.handleChange.bind(this);	
		this.handleChange2 = this.handleChange2.bind(this);
		this.handleClick = this.handleClick.bind(this);
		
	}
	
	render(){
		
		return(
			<div className="userbox">
				<input className="user" type="text" placeholder="已验证手机/邮箱" value={this.state.detail} 
				onChange={this.handleChange}/>
				<span className="input_tips" style={{display:this.state.tip?"block":"none"}}>请输入常用帐号</span>
				<input className="passWord" type="password" placeholder="密码" value={this.state.password} 
				onChange={this.handleChange2} />
				<i className="eye"></i>
				<p className="loginbtn" onClick={this.handleClick}>登录</p>
				<div className="logindiv">还没账号？</div>
				<Link to="/Regist" className="registerbtn">注册</Link>
			</div>
		)
	}
	handleChange(e){
		this.setState({
			detail:e.target.value
		})
	}
	handleChange2(e){
		this.setState({
			password:e.target.value
		})
	}
	handleClick(e){
		var _user = localStorage.getItem("user"); 
		if(!_user){
				this.setState({
					tip:true
				})

				return
		} if(this.state.detail == JSON.parse(_user).name && this.state.password == JSON.parse(_user).password){
					browserHistory.push('/mine')
		} else{
		 		console.log("用户名或密码错误")
		}

	}
	
	
}
export default Login;