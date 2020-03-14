import React from 'react'

export const Output=(props)=>{
    return(<input id="output" type='textbox' readOnly value={props.setExp}/>)
}