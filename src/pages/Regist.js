import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router';
import './Regist.css'

class Regist extends Component{
	constructor(props){
		super(props);
		this.state={
			detail:"",
			password:""
		}
		this.handleChange = this.handleChange.bind(this);	
		this.handleChange2 = this.handleChange2.bind(this);
		this.handleClick=this.handleClick.bind(this)
	}
	render(){
		return(
		<div className="userbox">
			<div className="registbox">
				<input className="phonenumber" type="text" placeholder="手机号" value={this.state.detail} onChange={this.handleChange}/>
				<input className="prove" type="text" placeholder="请证明你不是机器人"/>
				<div className="yzmdiv">
					<img className="yzm" src="https://passport.lagou.com/vcode/create?from=register&refresh=1500348037771"/>
					<span className="yzmspan">看不清楚，<i className="change">换一张</i></span>
				</div>
				<input className="message" type="text" placeholder="短信验证码"/>
				<input className="password" type="password" placeholder="设置6—16位密码" value={this.state.password} onChange={this.handleChange2}/>
				<p className="goregiste" onClick={this.handleClick}>注册</p>
				<div className="regist_text">已有账号？</div>
				<Link to="/login" className="gologin">登录</Link>
				<div className="regist_text2">点击注册，即代表您同意<Link to="">《拉勾用户协议》</Link>
				</div>
			</div>
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
	 	var _detail=this.state.detail;
		var _password=this.state.password;
		
		var user={
			name:_detail,
			password:_password,
		}
		
	 	localStorage.setItem("user",JSON.stringify(user)); 
	 	
	 }

 	  
   
}
export default Regist;