import React, {useState} from 'react';
import Field from "../components/Field";
import PrimaryButton from "../components/PrimaryButton";
import {useNavigate} from 'react-router-dom';
import {login} from "../../services/user";
import {useUser} from "../../contexts/UserContext";
import Header from "../components/Header";


const Login = () => {
    const {userId, setUser} = useUser();
    const [userIdVal, setUserIdVal] = useState(null)
    const [team, setTeam] = useState(null)
    const [project, setProject] = useState(null)
    const nav = useNavigate();
    return <div className='flex flex-col flex-1 h-full w-full'>
        <Header title={"Select Form"}/>
        <div className='flex flex-col flex-1 justify-between'>
            <div className=''>
                <Field label={"ID"} setValue={setUserIdVal}/>
                <Field label={"Team"} setValue={setTeam}/>
                <Field label={"Project"} setValue={setProject}/>
            </div>
            <PrimaryButton label={"Submit"} className="m-2"
                           onClick={() => {
                               if(userIdVal && userIdVal.trim() !== "") {
                                   login(userIdVal, team, project).then((res) => {
                                       setUser(userIdVal, "USER")
                                       nav('/forms')
                                   })
                               } else {
                                   alert("User id is required")
                               }
                           }}/>
        </div>
    </div>;
};

export default Login;
