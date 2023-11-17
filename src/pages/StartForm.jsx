import React, {useState} from 'react';
import Field from "./components/Field";
import SubmitButton from "./components/SubmitButton";
import { useNavigate } from 'react-router-dom';
import {login} from "../services/user";


const StartForm = () => {
    const [userId, setUserId] = useState(null)
    const [team, setTeam] = useState(null)
    const [project, setProject] = useState(null)
  const nav = useNavigate();
  return <div className='bg-amber-200 flex flex-col flex-1 w-full justify-between'>
      <div className='p-2 h-full'>
          <Field label={"ID"} setValue={setUserId}/>
          <Field label={"Team"} setValue={setTeam}/>
          <Field label={"Project"} setValue={setProject}/>
      </div>
      <SubmitButton label={"Submit"} onClick={()=> {
          console.log(userId, team, project)
          let res = login(userId, team, project)
          console.log(res)
          res.then(nav('/form'))
      }}/>
    </div>;
};

export default StartForm;
