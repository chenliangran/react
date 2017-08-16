import React ,{Component} from 'react';
import {Link,IndexLink} from 'react-router';
import './Footer.css'
class Footer extends Component{
	constructor(props){
		super();
		this.state={
			list:[{
					title:"职位",
					type:"custom",
					active:"1"
				},
				{
					title:"搜索",
					type:"search",
					active:"0"
				},
				{
					title:"我的",
					type:"mine",
					active:"0"
				}]
		}
	}
	render(){
		return(
			<div className="footer">
				<IndexLink to="/" activeClassName="active" className={`footer-tab-custom`}>
					<span className={"iconfont icon-home"}></span>
					<span className={"text"}>职位</span>	 
				</IndexLink>
				<Link to="/search" activeClassName="active" className={`footer-tab-search`}>
					<span className={"iconfont icon-sousuo"}></span>
					<span className={"text"}>搜索</span>	
				</Link>
				<Link to="/mine" activeClassName="active" className={`footer-tab-mine`}>
					<span className={"iconfont icon-wode1"}></span>
					<span className={"text"}>我的</span>	
				</Link>
			</div>
		)
			
	}
} 


export default Footer