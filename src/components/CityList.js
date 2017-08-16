import React ,{Component} from 'react';
import {browserHistory} from 'react-router';
import './CityList.css'
import Citytd from './Citytd';
import $ from 'jquery';

class CityList extends Component{
	constructor(props){
		super();
		this.changeClick=this.changeClick.bind(this)
	}

	render(){
		let list = this.props.list;
		var citys = list.map((item,idx)=>{
            return (    
            	    <div>
                        <div className="cities-header">{item.nameStr}</div>
						<table className="cities-list">
							<tbody>
								<tr className="cities-list-item" onClick={this.changeClick}>
									<Citytd list={item}/>
								</tr>
							</tbody>
						</table>
					</div>
            	) 
		});

		return(
		        <div>
					{citys}
				</div>
			)
	}
	changeClick(e){
		this.props.state(false,e.target.innerHTML)
	}
	
}
export default CityList
