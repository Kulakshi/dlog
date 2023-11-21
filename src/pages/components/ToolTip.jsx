// TooltipContent.js
import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {personalizeElement} from "../../services/form";
import {useUser} from "../../contexts/UserContext";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const ToolTip = ({formId, element, onClose, setElement}) => {

    const [customLabel, setCustomLabel] = useState()
    const {userId} = useUser()

    const onSave = () => {
        personalizeElement(userId, formId, element.element_id, customLabel).then(onClose())
        setElement({...element, customLabel: customLabel})
        console.log({...element, customLabel: customLabel})
    }

    return (
        <Paper sx={{padding: 2}}>
            <div className="font-bold mb-3">
                Original Label: {element.label}
            </div>
            Add your own personalized label:
            <TextField label={element.customLabel} fullWidth margin="normal"
                       onChange={(e) => setCustomLabel(e.target.value)}/>
            <div className="flex flex-end gap-4 items-center justify-end">
                <PrimaryButton onClick={onClose} label="Close" className="w-1/2 m-0"/>
                <SecondaryButton onClick={onSave} label="Save" className="w-1/2 m-0"/>

            </div>
        </Paper>
    );
};

export default ToolTip;
