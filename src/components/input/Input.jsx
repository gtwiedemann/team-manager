import React from 'react';
import './Input.css';

export function Input(props) {
    return (
        <div className='input-container'>
            <label>{props.labelText}</label>
            <input type={props.inputType}></input>
        </div>
    );
}
