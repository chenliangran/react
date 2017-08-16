import React ,{Component} from 'react';
import './Citytd.css';
import $ from 'jquery';
class Citytd extends Component{
	constructor(props){
		super();
	}

	render(){
		let list = this.props.list;
		let arr=[];
		for(let attr in list){
			if(list[attr] instanceof Array){
				arr=list[attr]
			}
		}
		var citytds = arr.map(function(item,idx){
            return (    
            	       <div className="_div" >
                      		<td className="activeable cities-item">
                      			{item}
							</td>
					   </div>
            	) 
		});

		return(
		        <div className="td_div">
					{citytds}
				</div>
			)
	}
	
	
}
export default Citytd
