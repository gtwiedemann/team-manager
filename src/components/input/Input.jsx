import React from 'react';
import './Input.css';
import { ComboBox } from '../combobox/ComboBox.jsx';

export function Input(props) {
    const InputOrCombobox = () => {
        if (props.itemsList) {
            return <ComboBox itemsList={props.itemsList}></ComboBox>;
        } else {
            return <input type={props.inputType}></input>;
        }
    };

    return (
        <div className='input-container' style={props.styles}>
            <label>{props.labelText}</label>
            {InputOrCombobox()}
        </div>
    );
}

/* <input type={props.inputType}></input> */
