import React, {useEffect, useState} from 'react';
import InfoButton from "./InfoButton";
import {Add, HdrPlusOutlined, PlusOne, Remove} from "@mui/icons-material";

const TimeStampButton = ({key, formId, element, setValue, displayLabel}) => {
    const [counterVal, setCounterVal] = useState(0)
    const getAttributeValue = (attributes, attributeName) => {
        const attribute = attributes.find(attr => attr.name === attributeName);
        return attribute ? attribute.value : null;
    };

    const step = parseInt(getAttributeValue(element?.attributes, 'step'));
    const increment = () => {
        setCounterVal(counterVal + step)
        console.log("increment", counterVal + step)
        setValue(counterVal + step)
    }
    const decrement = () => {
        setCounterVal(counterVal - step)
        setValue(counterVal + step)
    }

    return (
        <div key={key} className="flex flex-col bg-primary text-white p-2 rounded-md
          focus:outline-none focus:ring focus:border-tertiary justify-between
          flex-grow items-center">
            <div className="flex flex-row mb-3 text-sm">
                <p>{displayLabel && element.label}</p>
                {!displayLabel && <InfoButton formId={formId} element={element}/>}
            </div>
            <p className="bg-white w-full h-fit rounded text-primary p-2">{counterVal}</p>
            <div className="rounded-2xl flex flex-1 w-full flex-col m-2 bg-secondary overflow-hidden">
                <div className="flex h-1/2 w-full items-center justify-center" onClick={increment}>
                    <Add/>
                </div>
                <hr/>
                <div className="flex h-1/2 w-full items-center justify-center" onClick={decrement}>
                    <Remove/>
                </div>
            </div>
        </div>
    );
};

export default TimeStampButton;