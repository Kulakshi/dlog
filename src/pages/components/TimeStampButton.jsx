import React, {useState} from 'react';
import InfoButton from "./InfoButton";

const TimeStampButton = ({ label, info, onClick }) => {

  return (
      <div className="flex flex-row bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700
          focus:outline-none focus:ring focus:border-blue-300 justify-between
          flex-grow">
        <button
          className=""
          onClick={onClick}
        >
          {label}
        </button>
        <InfoButton label={label}/>

      </div>
  );
};

export default TimeStampButton;