import React from 'react';
var exp='';
var _props={};
export const Numpad=(props)=>{
    _props=props;
    return(<table>{createNumpad()}</table>);
}

function createNumpad(){
    var table=[];
    let j=1;
    for(let i=1;i<=3;++i){
        let tr=[];
        for(;j<=3*i;++j){
            tr.push(<td key={j}>
                <button onClick={inputExp} id={"num"+j}>{j}</button>
            </td>);
        }
        table.push(<tbody key={i}><tr>{tr}</tr></tbody>);
    }
        table.push(<tbody key={0}>
                    <tr>
                        <td colSpan='3' style={{textAlign:'Center'}}>
                            <button onClick={inputExp} id={'num'+0}>{0}</button>
                        </td>
                    </tr>
        </tbody>
        );
    return table;
}
function inputExp(event){
    exp=event.target.id.slice(-1);
    _props.getExp(exp);
}