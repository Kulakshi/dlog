import React from 'react';
import TimeStampButton from "../components/TimeStampButton";
import {addEntry} from "../../services/form";
import Scale from "../components/Scale";
import {useUser} from "../../contexts/UserContext";

const FormElement = ({formId, element, displayLabel}) => {
    const {userId, isRecording} = useUser()

    const submitValue = ( val = null) => {
        if (isRecording){
            switch (element.element_type) {
                case "TimeStamp": {
                    addEntry(userId,formId)
                    break
                }
                case "Counter": {
                    addEntry(userId,formId)
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
            return <TimeStampButton key={element.element_id} formId={formId} element={element}
                                    onClick={()=>submitValue()} displayLabel={displayLabel}/>
        case "Slider":
            return <Scale key={element.element_id} formId={formId} element={element}
                          setValue={(val)=>submitValue(val)} displayLabel={displayLabel}/>
        default: <></>
    }
};

export default FormElement;

