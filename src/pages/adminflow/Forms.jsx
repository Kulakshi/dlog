import React, {useState, useEffect} from 'react';
import PrimaryButton from "../components/PrimaryButton";
import {useNavigate} from 'react-router-dom';
import {getElementTypes, getType, createElement} from "../../services/elements";
import FormFields from "./FormFields";
import {createForm, getForms} from "../../services/admin";
import {useUser} from '../../contexts/UserContext';
import Header from "../components/Header";
import ListItem from "../components/ListItem";


const Forms = () => {
    const {userId, setUser} = useUser();
    const [forms, setForms] = useState();
    const [openNewForm, setOpenNewForm] = useState(false);
    const [name, setName] = useState(null);
    const [label, setLabel] = useState({});

    useEffect(() => {
        getForms(userId).then(res => {
            setForms(res.response.forms)
        })
    }, []);


    const nav = useNavigate();
    return <div className='flex flex-col flex-1 h-full w-full'>
        <Header title={"Your Forms"}/>
        <div className='flex flex-col flex-1 h-full w-full overflow-y-scroll justify-between'>
            <div className=''>
                <ul className=''>
                    {forms?.map((form, i) => (
                        <ListItem key={form._id} label={form.name}/>
                    ))}
                </ul>
                {!forms && <div>No Forms available</div>}
            </div>
            <PrimaryButton label={"Add New Form"} className="m-4"
                           onClick={() => {
                               nav("/createform")
                           }}/>
        </div>
    </div>;
};

export default Forms;
