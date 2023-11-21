import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useUser} from '../../contexts/UserContext';
import {getAllForms} from "../../services/form";
import {CircularProgress} from "@mui/material";
import Header from "../components/Header";
import ListItem from "../components/ListItem";
import BackButton from "../components/BackButton";


const Forms = () => {
    const {userId, setUser} = useUser();
    const [forms, setForms] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAllForms().then(res => {
            setForms(res?.response?.forms)
            setIsLoading(false)
        })
    }, []);


    const nav = useNavigate();
    return <div className='flex flex-col flex-1 h-full w-full'>
        <Header title={"Select Form"}/>
        <div className='flex flex-col flex-1 justify-between p-5 h-full w-full overflow-y-scroll'>
            <div className=''>
                <ul className=''>
                    {forms?.map((form, i) => (
                        <ListItem key={form._id} onClick={() => nav("/form", {state: {form: form}})} label={form.name}/>
                    ))}
                </ul>
                {!isLoading && !forms && <div>No Forms available</div>}
                {isLoading && !forms &&
                    <div className="flex flex-row gap-4 items-center justify-center">
                        <CircularProgress size={30} color="primary"/>
                        Loading...
                    </div>
                }
            </div>
        </div>
        <BackButton backPath={"/"}/>
    </div>;
};

export default Forms;
