import React from 'react';

const SecondaryButton = ({label, onClick, className, enabled= true}) => {
    return (
        <button
            className={`bg-neutral text-lg text-primary border border-primary p-2 rounded-md ${className}`}
            onClick={onClick}
            disabled={!enabled}
        >
            {label}
        </button>
    );
};

export default SecondaryButton;