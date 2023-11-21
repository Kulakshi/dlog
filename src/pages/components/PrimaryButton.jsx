import React from 'react';

const PrimaryButton = ({label, onClick, className}) => {
    return (
        <button
            className={`bg-primary text-lg text-neutral p-2 rounded-md hover:bg-black
      focus:outline-none focus:ring focus:border-blue-300 ${className}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default PrimaryButton;