import React from 'react';
import './Table.css';

export function Table(props) {
    return (
        <div>
            <div className='table-header'>
                {props.header.map((item, index) => {
                    return <label></label>;
                })}
            </div>
            <div className='table-rows'></div>
        </div>
    );
}
