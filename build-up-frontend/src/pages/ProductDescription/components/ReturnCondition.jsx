import React from 'react';
import { useHistory } from 'react-router-dom';


export const ReturnCondition = (props) => {
    const conditions = ["NEW", "USED", "PRE-ORDER"];
    return(
        <ul className="dropdown-menu">
            {conditions.map((condition, index) => (
                <li key={index} onClick={() => props.handleCondition(condition)}>
                    <a className="dropdown-item col" href="#">{condition}</a>
                </li>
            ))}
        </ul>
    
    );

}