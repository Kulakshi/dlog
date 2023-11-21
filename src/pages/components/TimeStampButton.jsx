import React, {useEffect, useState} from 'react';
import InfoButton from "./InfoButton";

const TimeStampButton = ({key, formId, element, onClick}) => {

    const [localElem, setLocalElem] = useState(element)

    return (
        <button key={key} className="flex flex-row bg-primary text-white p-2 rounded-md
          focus:outline-none focus:ring focus:border-tertiary justify-between
          flex-grow">
            <div
                className="w-full h-full flex items-center justify-center"
                onClick={onClick}
            >
                {localElem.customLabel ? localElem.customLabel : localElem.label}
            </div>
            <InfoButton formId={formId} element={element} setElement={(element) => setLocalElem(element)}/>

        </button>
    );
};

export default TimeStampButton;