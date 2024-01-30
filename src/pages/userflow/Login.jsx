import React, {useEffect, useState} from 'react';
import Field from "../components/Field";
import PrimaryButton from "../components/PrimaryButton";
import {useNavigate} from 'react-router-dom';
import {getAllUsers, login} from "../../services/user";
import {useUser} from "../../contexts/UserContext";
import Header from "../components/Header";
import Select from 'react-select';


const Login = () => {
    const {userId, setUser} = useUser();
    const [userIdVal, setUserIdVal] = useState(null)
    const [team, setTeam] = useState(null)
    const [project, setProject] = useState(null)
    const [users, setUsers] = useState(null)
    const nav = useNavigate();

    useEffect(() => {
        getAllUsers().then(res => {
            if (res?.response?.users && res?.response?.users.length) {
                setUsers(res?.response?.users?.map((user) => {
                    return {
                        value: user?.user_id,
                        label: user?.user_id
                    }
                }))
            }
        })
    }, []);


    return <div className='flex flex-col flex-1 h-full w-full text-black'>
        <Header title={"Select Form"}/>
        <div className='flex flex-col flex-1 justify-between'>
            <div className=''>
                <div className="p-1 px-4 flex flex-row items-center gap-2 w-full justify-between">
                    ID
                    <Select
                        className="w-5/6 text-left"
                        options={users}
                        isSearchable
                        placeholder="Search..."
                        onChange={(user) => {
                            setUserIdVal(user.value)
                        }}
                    />
                </div>

                {/*<Field label={"ID"} setValue={setUserIdVal}/>*/}
                <Field label={"Team"} setValue={setTeam} />
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
