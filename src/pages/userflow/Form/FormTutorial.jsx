import React, {useCallback, useEffect, useState} from 'react';
import './style.css';
import './formstyles.css';
import {
    DashboardOutlined, PauseCircleOutlined, PlayCircleOutlined,
    SaveOutlined, VisibilityOffOutlined, VisibilityOutlined,
} from "@mui/icons-material";
import SecondaryButton from "../../components/SecondaryButton";

const FormTutorial = ({onClose}) => {
    return (
        <div
            className={`fixed top-50 left-0 w-full h-full bg-black bg-opacity-30 flex flex-col gap-2 items-center justify-center block`}>

            <div className="p-5 rounded-2xl bg-white -mt-20 gap-4">
                <div className="flex flex-row gap-2 items-center">
                    <PlayCircleOutlined className="text-red-300 opacity-100"
                                        style={{width: 30, height: 30, opacity: 100}}/>
                    <PauseCircleOutlined className="text-red-300 opacity-100"
                                         style={{width: 30, height: 30, opacity: 100}}/>
                    <div className="opacity-100 text-black text-sm">Record/Pause data entry</div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <VisibilityOutlined className="text-red-300 opacity-100"
                                        style={{width: 30, height: 30, opacity: 100}}/>
                    <VisibilityOffOutlined className="text-red-300 opacity-100"
                                           style={{width: 30, height: 30, opacity: 100}}/>
                    <div className="opacity-100 text-black text-sm">Show/Hide labels</div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <DashboardOutlined className="text-red-300 opacity-100"
                                       style={{width: 30, height: 30, opacity: 100}}/>
                    <SaveOutlined className="text-red-300 opacity-100" style={{width: 30, height: 30, opacity: 100}}/>
                    <div className="opacity-100 text-black text-sm">Edit/Save form layout</div>
                </div>
                <SecondaryButton className="mt-2" label={"OK"} onClick={onClose}/>
            </div>
        </div>
    );

};

export default FormTutorial;
