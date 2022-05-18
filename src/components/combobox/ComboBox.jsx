import React from 'react';
import './ComboBox.css';

export function ComboBox(props) {
    return (
        <select className='comboboxItem'>
            {props.itemsList.map((item) => {
                return <option>{item}</option>;
            })}
        </select>
    );
}
