import React from 'react';
import './Input.css';

export function Input(props) {
    return (
        <div className='input-container' style={props.styles}>
            <label>{props.labelText}</label>
            <input type={props.inputType}></input>
        </div>
    );
}
