// TooltipContent.js
import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {personalizeElement} from "../../services/form";
import {useUser} from "../../contexts/UserContext";

const ToolTip = ({formId, element, onClose, setElement}) => {

    const [customLabel, setCustomLabel] = useState()
    const {userId} = useUser()

    const onSave = ()=>{
        personalizeElement(userId, formId, element.element_id, customLabel).then(onClose())
        setElement({...element, customLabel:customLabel})
        console.log({...element, customLabel:customLabel})
    }

    return (
        <Paper sx={{padding: 2}}>
            <div className="font-bold mb-3">
                Original Label: {element.label}
            </div>
            Add your own personalized label:
            <TextField label={element.customLabel} fullWidth margin="normal"
                       onChange={(e)=>setCustomLabel(e.target.value)}/>
            <div className="flex flex-end gap-4 items-center justify-end">
            <Button variant="contained" onClick={onClose}>
                Close
            </Button>
            <Button variant="contained" onClick={onSave}>
                Save
            </Button>

            </div>
        </Paper>
    );
};

export default ToolTip;
