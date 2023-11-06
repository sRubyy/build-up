import React from 'react';

export const ReturnCondition = (props) => {
  const conditions = ['NEW', 'USED', 'PRE-ORDER'];
  return (
    <ul className="dropdown-menu">
      {conditions.map((condition, index) => (
        <li key={index} onClick={() => props.handleCondition(condition)}>
          <div className="dropdown-item col">{condition}</div>
        </li>
      ))}
    </ul>
  );
};
