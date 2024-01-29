import React, {useEffect, useState} from 'react';
import {getEntries, getForm} from "../../services/form";
import {useLocation, useNavigate} from "react-router-dom";
import {useUser} from "../../contexts/UserContext";
import {CircularProgress} from "@mui/material";
import InfoButton from "../components/InfoButton";
import Header from "../components/Header";
import SecondaryButton from "../components/SecondaryButton";
import FormElement from "../userflow/FormElement";
import Table from "../components/Table";
import CsvDownloadButton from 'react-json-to-csv'


const FormDashboard = () => {
    const location = useLocation()
    const nav = useNavigate();
    const {userRole, userId} = useUser()
    const [isLoading, setIsLoading] = useState(true);

    const [data, setData] = useState([])
    const [form, setForm] = useState(null)

    const loadForm = ()=> {
        getForm(userRole, userId, location.state.form._id)
            .then((res) => {
                setForm(res?.response.form)
                setIsLoading(false)
            })
    }
    const loadEntries = ()=> {
        getEntries(userId, location.state.form._id)
            .then((res) => {
                setData(res?.response.data)
                setIsLoading(false)
            })
    }
    useEffect(() => {
        if (!form) loadForm()
        loadEntries()
    }, [])

    console.log(form)
    return <div className='flex flex-col flex-1 h-full w-full'>
        {
            form &&
            <Header title={`${form.name} - Summary`} backPath={"/admin/forms"}/>
        }
        <div className='flex flex-col flex-1 p-4 py-1 gap-2 overflow-y-scroll'>
            <div className="flex flex-row gap-5 justify-between">
                <div className="flex flex-row gap-5">
                    <p className="left-0"><span className="font-bold">No of Entries: </span> {data && data?.count} </p>
                    <p className="start-0"><span className="font-bold">No of Users: </span> {data && data?.user_count} </p>
                </div>
                <div className="flex flex-row gap-2 justify-between">
                    <SecondaryButton label="Edit Layout" onClick={()=> nav("/admin/editform", {state: {form: form}})}/>
                    <CsvDownloadButton className="bg-neutral text-lg text-primary border border-primary p-2 rounded-md" data={data?.all} />
                </div>
            </div>
            {
                data && <Table data={data?.all}/>
            }
            {!isLoading && !form &&
                "Error loading the form"
            }
        </div>
    </div>;
};

export default FormDashboard;
