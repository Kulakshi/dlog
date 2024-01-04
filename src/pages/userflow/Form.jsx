import React, {useEffect, useState} from 'react';
import {getForm, setRecording, setRecordingState} from "../../services/form";
import {useLocation} from "react-router-dom";
import FormElement from "./FormElement";
import {useUser} from "../../contexts/UserContext";
import {CircularProgress} from "@mui/material";
import BackButton from "../components/BackButton";
import InfoButton from "../components/InfoButton";
import PrimaryButton from "../components/PrimaryButton";


const Form = () => {
    const location = useLocation()
    const {userId, isRecording, setIsRecording} = useUser()
    const [isLoading, setIsLoading] = useState(true);

    const [form, setForm] = useState(null)

    const loadForm = ()=> {
        getForm(userId, location.state.form._id)
            .then((res) => {
                setForm(res?.response.form)
                setIsLoading(false)
            })
    }
    useEffect(() => {
        loadForm()
    }, [])

    const setRecording = () => {
        setIsRecording(!isRecording)
    }

    const sliders = form ? form?.elements.filter((item) => item.element_type === "Slider") : null;
    const buttons = form ? form?.elements.filter((item) => item.element_type !== "Slider") : null;

    return <div className='flex flex-col flex-1 h-full w-full'>
        {
            form &&
            <div className='flex flex-row px-5 py-2 border-gray-400 justify-between items-center'>
                {form.name}
                <PrimaryButton onClick={setRecording} label={isRecording ? "Stop Recording":"Start Recording"} className={`px-2 m-0 ${isRecording && "bg-red-400"}`}/>
                <InfoButton formId={form._id} type={"FORM"} labelHidden={form.hide_label} callback={()=>loadForm()} className="top-0"/>
            </div>
        }
        <div className='flex flex-wrap flex-1 justify-around p-4 pt-0 gap-2'>
            {
                sliders && sliders.length > 0 && <div className='flex flex-row gap-2 justify-around flex-1'>
                    {
                        sliders.map((element) => {
                            return <FormElement formId={form._id} element={element} displayLabel={!form.hide_label}/>
                        })
                    }
                </div>
            }
            {
                buttons && buttons.length > 0 && <div className='flex flex-col gap-2 justify-around flex-1'>
                    {
                        buttons.map((element) => {
                            return <FormElement formId={form._id} element={element} displayLabel={!form.hide_label}/>
                        })
                    }
                </div>
            }

            {isLoading && !form &&
                <div className="flex flex-row gap-4 items-center justify-center text-tertiary">
                    <CircularProgress size={30} color="primary"/>
                    Loading...
                </div>
            }
            {!isLoading && !form &&
                "Error loading the form"
            }
        </div>
            <BackButton backPath={"/forms"}/>
    </div>;
};

export default Form;
