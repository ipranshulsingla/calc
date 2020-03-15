import React from 'react'
var _props={};
export const Operations=(props)=>{
    _props=props;
    return(<>
        <table>
            <tbody>
            <tr>
                <td><button id='add+' onClick={inputOpr}>+</button></td>
                <td><button id='sub-' onClick={inputOpr}>-</button></td>
            </tr>
            <tr>
                <td><button id='mul*' onClick={inputOpr}>*</button></td>
                <td><button id='div/' onClick={inputOpr}>/</button></td>
            </tr>
            <tr>
                <td colSpan='2' style={{textAlign:'center'}}><button id='equal=' onClick={_props.getResult} style={{width:'100%'}}>=</button></td>
            </tr>
            <tr>
                <td colSpan='2' style={{textAlign:'center'}}><button onClick={_props.clr} style={{width:'100%'}}>CE</button></td>
            </tr>
            </tbody>
        </table>
    </>)
}

function inputOpr(event){
    let opr=event.target.id.slice(-1);
    console.log(opr);
    _props.getOpr(opr);
}