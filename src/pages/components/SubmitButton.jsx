import React from 'react';

const SubmitButton = ({label, onClick}) => {
    return (
        <button
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700
      focus:outline-none focus:ring focus:border-blue-300 m-4 w-full"
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default SubmitButton;