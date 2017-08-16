import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './App.css';

class App extends Component {
    constructor(props){
    super();
  }
  render() {
    return (
      <div>
       <Header />
        
        {this.props.children}
       <Footer />
        </div>
    );
  }
}

export default App;
