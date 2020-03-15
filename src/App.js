import React, { Component } from 'react';
import Calc from './container/Calc';

export default class App extends Component{
  constructor(props){
    super(props);
    this.props=props;
  }
  render(){
    return (<Calc/>);
  }

}
