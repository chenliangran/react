import React ,{Component} from 'react';
import './Jobitem.css'
import data from './data.json'
class Jobitem extends Component{
	constructor(){
		super();
		this.state={
			number:"0",
			list:[]
		}
		this.moreClick=this.moreClick.bind(this);
	}
	componentWillMount(){
		var _result=data.page[this.state.number].result;
		var arr=_result.map(function(ele){
			return(
					<li className="activeable list-item" key={ele.positionId}>
						<img className="job_img" src={"//www.lgstatic.com/"+ele.companyLogo}/>
						<div className="item-desc">
							<h2 className="item-title">{ele.companyName}</h2>
							<p className="item-info"> 
								<span className="item-pos">{ele.positionName + "[" +ele.city + "]"}</span>
								<span className="item-salary">{ele.salary}</span>
							</p>
							<p className="item-time">
								{ele.createTime}
							</p>
						</div>
					</li>
				
				)
		})
		this.setState({
			list:arr,
			number:1
		})
		
	}
	moreClick(){
		
		var _result2=data.page[this.state.number++].result;
		var arr2=_result2.map(function(ele){
			return(
					<li className="activeable list-item" key={ele.positionId}>
						<img className="job_img" src={"//www.lgstatic.com/"+ele.companyLogo}/>
						<div className="item-desc">
							<h2 className="item-title">{ele.companyName}</h2>
							<p className="item-info">
								<span className="item-pos">{ele.positionName + "[" +ele.city + "]"}</span>
								<span className="item-salary">{ele.salary}</span>
							</p>
							<p className="item-time">
								{ele.createTime}
							</p>
						</div>
					</li>
				
				)
		})
		var arr3=this.state.list.concat(arr2);
		this.setState({
			list:arr3,
			number:this.state.number
		})
	
	}
	render(){
		return(
			<div>
				{this.state.list}
				<div id="more" onClick={this.moreClick}>加载更多</div>
			</div>
			

		)
	}



}
export default Jobitem