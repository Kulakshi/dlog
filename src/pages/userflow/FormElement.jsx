import React from 'react';
import TimeStampButton from "../components/TimeStampButton";
import {addEntry} from "../../services/form";
import Scale from "../components/Scale";
import {useUser} from "../../contexts/UserContext";

const FormElement = ({formId, element}) => {
    const {userId} = useUser()
    switch (element.element_type){
        case "TimeStamp":
            return <TimeStampButton key={element.element_id} formId={formId} element={element} onClick={()=>addEntry(userId,formId)}/>
        case "Slider":
            return <Scale key={element.element_id} formId={formId} element={element} setValue={(val)=>addEntry(userId, formId,element.element_id, val)}/>
        default: <></>
    }
};

export default FormElement;

