import React from 'react';

const SecondaryButton = ({label, onClick, className}) => {
    return (
        <button
            className={`bg-neutral text-lg text-primary border border-primary p-2 rounded-md ${className}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default SecondaryButton;