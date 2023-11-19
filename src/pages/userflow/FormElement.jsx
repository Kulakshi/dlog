import React from 'react';
import SubmitButton from "../components/SubmitButton";
import TimeStampButton from "../components/TimeStampButton";
import {addEntry} from "../../services/form";
import Scale from "../components/Scale";
import {useUser} from "../../contexts/UserContext";

const FormElement = ({formId, element}) => {
    const {userId} = useUser()
    switch (element.element_type){
        case "TimeStamp":
            return <TimeStampButton key={element.element_id} label={"Some people in the team are creating a new idea from my idea"} onClick={()=>addEntry(userId,formId)}/>
        case "Slider":
            return <Scale key={element.element_id} setValue={(val)=>addEntry(userId, formId,element.element_id, val)}/>
        default: <></>
    }
};

export default FormElement;

