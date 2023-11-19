import React, {useState} from 'react';
import Field from "../components/Field";
import SubmitButton from "../components/SubmitButton";
import { useNavigate } from 'react-router-dom';
import {login} from "../../services/user";
import {useUser} from "../../contexts/UserContext";


const StartForm = () => {
    const {userId, setUser} = useUser();
    const [userIdVal, setUserIdVal] = useState(null)
    const [team, setTeam] = useState(null)
    const [project, setProject] = useState(null)
  const nav = useNavigate();
  return <div className='bg-amber-200 flex flex-col flex-1 w-full justify-between'>
      <div className='p-2 h-full'>
          <Field label={"ID"} setValue={setUserIdVal}/>
          <Field label={"Team"} setValue={setTeam}/>
          <Field label={"Project"} setValue={setProject}/>
      </div>
      <SubmitButton label={"Submit"} onClick={()=> {
          login(userIdVal, team, project).then((res)=>{
              setUser(userId)
              nav('/form')
          })
      }}/>
    </div>;
};

export default StartForm;
