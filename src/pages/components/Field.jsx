import React from 'react';

const Field = ({label, placeholder, setValue}) => {
  return (
    <div className="p-4 flex flex-row items-center gap-2 w-full">
      <label className="block text-sm font-medium text-gray-600 w-1/6 text-left">
          {label ? label : "Enter:"}:
      </label>
      <input
        type="text"
        className="mt-1 p-2 border rounded-md w-5/6 focus:outline-none focus:ring focus:border-blue-300 h-14"
        placeholder={placeholder ? placeholder:"Type here..."}
        onChange={(e)=>setValue(e.target.value)}
      />
    </div>
  );
};

export default Field;