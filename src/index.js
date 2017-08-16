import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import Search from './pages/Search';
import Home from './pages/Home';
import Mine from './pages/Mine';
import Login from './pages/Login';
import Regist from './pages/Regist';
import { Router, Route,IndexRoute,browserHistory ,} from 'react-router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	(<Router history={browserHistory}>
	  <Route path="/" component={App}>
	  	<IndexRoute component={Home}/>
	    <Route path="/Search" component={Search}/>
	    <Route path="/Mine" component={Mine}/>
	  </Route>
	  <Route path="/Login" component={Login}></Route>
	  <Route path="/Regist" component={Regist}></Route>
	</Router>
		)

	, 
	document.getElementById('root'));
registerServiceWorker();
