import React from 'react';

const Field = ({label, placeholder, setValue}) => {
    return (
        <div className="p-1 px-4 flex flex-row items-center gap-2 w-full justify-between">
            {label ? label : "Enter:"}:
            <input
                type="text"
                className=" w-5/6 mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 h-12"
                placeholder={placeholder ? placeholder : "Type here..."}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
};

export default Field;