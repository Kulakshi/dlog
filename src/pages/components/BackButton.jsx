import React from 'react';
import {useNavigate} from "react-router-dom";
import {ArrowBack} from "@mui/icons-material";

const BackButton = ({backPath}) => {
    let nav = useNavigate()
    return (
        <div onClick={() => nav(backPath, {replace: true})}
                         className="p-0 w-10">
            <ArrowBack/>
        </div>
    );
};

export default BackButton;