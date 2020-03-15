import React, { Component } from 'react';
import {Output} from '../components/Output';
import {Numpad} from '../components/Numpad';
import {Operations} from '../components/Operations';

export default class extends Component{
    constructor(props){
        super(props);
        this.props=props;
        this.state={expression:""};
    }   

    render(){
        return (
            <div>
                <h1>Calculator</h1>
                <div>
                    <Output setExp={this.state.expression}/>
                </div>
                <div style={{display:'flex'}}>
                    <Numpad getExp={this.getExp.bind(this)}/>
                    <Operations getOpr={this.getOpr.bind(this)} getResult={this.getResult.bind(this)} clr={this.clr.bind(this)}/>
                </div>
            </div>
        );
    }
    getExp(exp){
        this.setState({expression:this.state.expression+exp});
    }  
    
    getOpr(opr){
        console.log(opr)
        let oprs=['+','-','*','/'];
        let exp=this.state.expression;
        let res=oprs.indexOf(exp.slice(-1));
        if(res<0){
            exp=exp+opr;
        }
        else{
            exp=exp.slice(0,exp.length-1)+opr;
        }
        this.setState({expression:exp});
    }

    getResult(){
        // eslint-disable-next-line
        let res=eval(this.state.expression)
        res=res?res:0
        this.setState({expression:res+''});
    }

    clr(){
        this.setState({expression:''});
    }

}