import React ,{Component} from 'react';
import './Joblist.css'
import Jobitem from '../components/Jobitem';

class Joblist extends Component{
	constructor(props){
		super();
	}
	render(){
		return(
			<ul>
			<Jobitem/>
			
			</ul>
			)
	}
}
export default Joblist