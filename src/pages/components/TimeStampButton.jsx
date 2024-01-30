import React, {useEffect, useState} from 'react';
import InfoButton from "./InfoButton";

const TimeStampButton = ({key, formId, element, onClick, displayLabel, isRecording}) => {
    return (
        <button key={key} className={`flex flex-row text-white p-2 rounded-md
          focus:outline-none focus:ring focus:border-tertiary justify-between
          flex-grow h-full w-full ${isRecording ? 'bg-primary' : 'bg-gray-500'}`} disabled={!isRecording}>
            <div
                className="w-full h-full flex items-center justify-center"
                onClick={onClick}
            >
                {displayLabel && element.label}
            </div>
            {!displayLabel && <InfoButton formId={formId} element={element}/>}
        </button>
    );
};

export default TimeStampButton;