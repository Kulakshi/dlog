import React, {useEffect, useState} from 'react';
import {addEntry, getForm} from "../../services/form";
import {useLocation} from "react-router-dom";
import FormElement from "./FormElement";
import {useUser} from "../../contexts/UserContext";
import {CircularProgress} from "@mui/material";


const Form = () => {
    const location = useLocation()
    const {userId} = useUser()
    const [isLoading, setIsLoading] = useState(true);

    const [form, setForm] = useState(null)
    useEffect(() => {
        getForm(userId, location.state.form._id)
            .then((res) => {
                setForm(res?.response.form)
                setIsLoading(false)
            })

    }, [])

    return <div className='flex flex-col flex-1 h-full w-full'>
        <div className='flex flex-wrap flex-1 justify-between p-4 gap-2'>
            <div className='flex flex-row gap-2 justify-around flex-1'>
                {
                    form && form?.elements?.map((element) => {
                        return <FormElement formId={form._id} element={element}/>
                    })
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
        </div>
    </div>;
};

export default Form;
