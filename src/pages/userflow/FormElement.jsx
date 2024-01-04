import React from 'react';
import TimeStampButton from "../components/TimeStampButton";
import {addEntry} from "../../services/form";
import Scale from "../components/Scale";
import {useUser} from "../../contexts/UserContext";

const FormElement = ({formId, element, displayLabel}) => {
    const {userId} = useUser()
    switch (element.element_type){
        case "TimeStamp":
            return <TimeStampButton key={element.element_id} formId={formId} element={element}
                                    onClick={()=>addEntry(userId,formId)} displayLabel={displayLabel}/>
        case "Counter":
            return <TimeStampButton key={element.element_id} formId={formId} element={element}
                                    onClick={()=>addEntry(userId,formId)} displayLabel={displayLabel}/>
        case "Slider":
            return <Scale key={element.element_id} formId={formId} element={element}
                          setValue={(val)=>addEntry(userId, formId,element.element_id, val)} displayLabel={displayLabel}/>
        default: <></>
    }
};

export default FormElement;

