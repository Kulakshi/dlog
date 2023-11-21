import React from 'react';

const ListItem = ({key, onClick, label}) => {
    return (
        <li className="p-2 m-1 text-left border-b border-gray-600 text-gray-700 font-normal"
            key={key}
            onClick={onClick}>
            {label}
        </li>
    );
};

export default ListItem;