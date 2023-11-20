import React, {useEffect, useState} from 'react';
import InfoButton from "./InfoButton";

const TimeStampButton = ({key, formId, element, onClick}) => {

    const [localElem, setLocalElem] = useState(element)

    return (
        <div key={key} className="flex flex-row bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700
          focus:outline-none focus:ring focus:border-blue-300 justify-between
          flex-grow">
            <button
                className="text-center w-full"
                onClick={onClick}
            >
                {localElem.customLabel ? localElem.customLabel : localElem.label}
            </button>
            <InfoButton formId={formId} element={element} setElement={(element) => setLocalElem(element)}/>

        </div>
    );
};

export default TimeStampButton;