import React from 'react';
import InfoButton from "./InfoButton";

const TimeStampButton = ({key, formId, element, onClick}) => {

  return (
      <div key={key} className="flex flex-row bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700
          focus:outline-none focus:ring focus:border-blue-300 justify-between
          flex-grow">
        <button
          className="text-center w-full"
          onClick={onClick}
        >
          {element.customLabel? element.customLabel : element.label}
        </button>
        <InfoButton formId={formId} element={element}/>

      </div>
  );
};

export default TimeStampButton;