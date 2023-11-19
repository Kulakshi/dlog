import React, {useState, useEffect} from 'react';
import SubmitButton from "../components/SubmitButton";
import {useNavigate} from 'react-router-dom';
import {useUser} from '../../contexts/UserContext';
import {getAllForms} from "../../services/form";


const Forms = () => {
    const {userId, setUser} = useUser();
    const [forms, setForms] = useState();
    const [openNewForm, setOpenNewForm] = useState(false);
    const [name, setName] = useState(null);
    const [label, setLabel] = useState({});

    useEffect(() => {
        getAllForms().then(res => {
            setForms(res.response.forms)
        })
    }, []);


    const nav = useNavigate();
    return <div className='bg-amber-200 flex flex-col flex-1 justify-between p-5 h-full w-full overflow-y-scroll'>
        <div className='pt-10'>
            <ul className='pt-10'>
                {forms?.map((form, i) => (
                    <li key={form._id} onClick={()=>nav("/form",{state:{form:form}})}>
                        {form.name}
                    </li>
                ))}
            </ul>
            {!forms && <div>No Forms available</div>}
        </div>
        <SubmitButton label={"Add New Form"} onClick={() => {
            nav("/createform")
        }}/>
    </div>;
};

export default Forms;
