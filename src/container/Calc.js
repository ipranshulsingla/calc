import React, { Component } from 'react';
import {Output} from '../components/Output';
import {Numpad} from '../components/Numpad';
import {Operations} from '../components/Operations';

export default class extends Component{
    constructor(){
        super();
        this.props={};
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
        let oprs=['+','-','*','/'];
        let exp=this.state.expression;
        let res=oprs.indexOf(exp.slice(-1));
        if(res<1){
            exp=exp+opr;
        }
        else{
            exp=exp.slice(-(exp.length),-2)+opr;
        }
        this.setState({expression:exp});
    }

    getResult(){
        this.setState({expression:eval(this.state.expression)+''});
    }

    clr(){
        this.setState({expression:''});
    }

}