import React, {useState} from 'react';
import Field from "../components/Field";
import PrimaryButton from "../components/PrimaryButton";
import {useNavigate} from 'react-router-dom';
import {login} from "../../services/user";
import {useUser} from "../../contexts/UserContext";
import Header from "../components/Header";


const AdminLogin = () => {
    const {userId, setUser} = useUser();
    const [userIdVal, setUserIdVal] = useState(null)
    const nav = useNavigate();
    return <div className='flex flex-col flex-1 h-full w-full'>
        <Header title={"Select Form"}/>
        <div className='flex flex-col flex-1 h-full w-full justify-between'>
            <div className=''>
                <Field label={"ID"} setValue={setUserIdVal}/>
            </div>
            <PrimaryButton label={"Submit"} className="m-4"
                           onClick={() => {
                               login(userIdVal, "admin", "admin").then((res) => {
                                   setUser(userIdVal)
                                   nav('/adminforms')
                               })
                           }}/>
        </div>
    </div>;
};

export default AdminLogin;
