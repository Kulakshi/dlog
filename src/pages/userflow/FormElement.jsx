import React from 'react';
import TimeStampButton from "../components/TimeStampButton";
import {addEntry} from "../../services/form";
import Scale from "../components/Scale";
import {useUser} from "../../contexts/UserContext";
import Counter from "../components/Counter";
import DLogToggleButton from "../components/DLogToggleButton";

const FormElement = ({formId, element, displayLabel}) => {
    const {userId, isRecording} = useUser()

    const submitValue = ( val = null) => {
        if (isRecording){
            switch (element.element_type) {
                case "TimeStamp": {
                    addEntry(userId,formId, element.element_id)
                    break
                }
                case "Counter": {
                    addEntry(userId,formId, element.element_id, val)
                    break
                }
                case "Slider": {
                    addEntry(userId, formId, element.element_id, val)
                    break
                }
                default: {
                }
            }
        }
    }
    switch (element.element_type){
        case "TimeStamp":
            return <TimeStampButton key={element.element_id} formId={formId} element={element}
                                    onClick={()=>submitValue()} displayLabel={displayLabel}/>
        case "Counter":
            return <Counter key={element.element_id} formId={formId} element={element}
                                    setValue={(val)=>submitValue(val)} displayLabel={displayLabel}/>
        case "Slider":
            return <Scale key={element.element_id} formId={formId} element={element}
                          setValue={(val)=>submitValue(val)} displayLabel={displayLabel}/>
        case "Toggle":
            return <DLogToggleButton key={element.element_id} formId={formId} element={element}
                                    onClick={()=>submitValue()} displayLabel={displayLabel}/>
        default: <></>
    }
};

export default FormElement;

