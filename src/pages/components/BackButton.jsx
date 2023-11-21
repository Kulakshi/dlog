import React from 'react';
import SecondaryButton from "./SecondaryButton";
import {useNavigate} from "react-router-dom";
import PrimaryButton from "./PrimaryButton";

const BackButton = ({backPath, top=false}) => {
    let nav = useNavigate()
    return (
        <SecondaryButton label={"<"} onClick={() => nav(backPath, {replace: true})}
                         className={`p-0 w-10 absolute ${top ? "top-2 left-2" :  "bottom-2 left-2" }`}/>
    );
};

export default BackButton;