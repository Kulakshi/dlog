import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import {personalizeElement} from "../../services/form";
import {useUser} from "../../contexts/UserContext";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import {Switch} from "@mui/material";

const ToolTipHideLabel = ({formId, onClose, initVal, callback}) => {

    const [hideLabel, setHideLabel] = useState(initVal)
    const {userId} = useUser()

    const onSave = () => {
        personalizeElement(userId, formId, hideLabel).then(() => {
                if (callback) callback()
                onClose()
            }
        )
    }

    return (
        <Paper sx={{padding: 2}}>
            Hide label on the form:
            <Switch checked={hideLabel} defaultChecked onChange={(e) => setHideLabel(e.target.checked)}/>
            <div className="flex flex-end gap-4 items-center justify-end">
                <PrimaryButton onClick={onClose} label="Close" className="w-1/2 m-0"/>
                <SecondaryButton onClick={onSave} label="Save" className="w-1/2 m-0"/>

            </div>
        </Paper>
    );
};

export default ToolTipHideLabel;
