import React, { Component } from 'react';
import './Search.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import CityList from '../components/CityList';
import Citytd from '../components/Citytd';
import citys from '../components/city.json';
import $ from 'jquery';


class Search extends Component{
	constructor(props){
		super(props);
		this.state={
			show:false,
			city:"全国",
			arr:[],
			listmore:false,
			page:1
		}
		this.searchClick=this.searchClick.bind(this);
		this.preClick=this.preClick.bind(this);
		this.stateShow=this.stateShow.bind(this);
		this.moClick=this.moClick.bind(this);
		this.seaClick=this.seaClick.bind(this)
	}
		render(){
			let _arr=this.state.arr;
              	var lists=_arr.map(function(ele){
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

				return(
					<div>
						<div className="pre" onClick={this.preClick} style={{"display":this.state.show?"block":"none"}}>&lt;</div>
						<div id="content" style={{display:this.state.show?"none":"block"}}>
							<div className="left" onClick={this.searchClick}>
								<span className="city">{this.state.city}</span>
								<span className="cityicon"></span>
							</div>
							<div className="right">
								<input type="text" placeholder="搜索职位或公司" id="search"/>
								<span className="sea" onClick={this.seaClick}>
									<em className="searchicon"></em>
								</span>
							</div>
							<ul className="ul_lists">
								{lists}
								<div id="search_more" style={{display:this.state.listmore?"block":"none"}} onClick={this.moClick}>加载更多</div>
							</ul>
							
						</div>
						<div style={{"display":this.state.show?"block":"none"}} >
	                        <CityList list={citys.city} state={this.stateShow}/>
						</div>
                  
                    </div>
				)

		}	
		stateShow(show,city){
			this.setState({
				show:show,
				city:city
			})
		}
		searchClick(e){
			this.setState({
				show:true
			})

		}
		preClick(e){
			this.setState({
				show:false
			})
		}
		seaClick(e){
			this.setState({
					arr:[],
					listmore:true
					})
			var _this=this;
			var _cityname=this.state.city;
			var _positionName=$("#search").val();
			var pages=this.state.page++;
			$.ajax({
				type:"POST",
				url : `https://m.lagou.com/search.json?city=${_cityname}&positionName=${_positionName}&pageNo=${pages}&pageSize=15`,
				dataType : "json",
				success:function(data){
					_this.setState({
							arr:[..._this.state.arr,...data.content.data.page.result],
							listmore:true
					})
				}
			});

		}
		
		moClick(e){
			var _this=this;
			var _cityname=this.state.city;
			var _positionName=$("#search").val();
			var pages=this.state.page++;
			$.ajax({
				type:"POST",
				url : `https://m.lagou.com/search.json?city=${_cityname}&positionName=${_positionName}&pageNo=${pages}&pageSize=15`,
				dataType : "json",
				success:function(data){
					_this.setState({
							arr:[..._this.state.arr,...data.content.data.page.result],
							listmore:true
					})
				}
			});

		}
		
		
}
export default Search;