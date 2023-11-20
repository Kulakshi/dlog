import React, {useEffect, useState} from 'react';
import Scale from "../components/Scale";
import TimeStampButton from "../components/TimeStampButton";
import {addEntry, getForm} from "../../services/form";
import {useLocation} from "react-router-dom";
import FormElement from "./FormElement";
import {useUser} from "../../contexts/UserContext";



const Form = () => {
    const location = useLocation()
    const {userId} = useUser()

    const [form, setForm] = useState()
    useEffect(()=>{
        getForm(userId, location.state.form._id).then((res)=>setForm(res.response.form))
    },[])

  return <div className='bg-amber-200 flex flex-col flex-1 w-full justify-between'>
      <div className='flex flex-wrap flex-1 justify-between p-4 gap-2'>
          <div className='flex flex-row gap-2 justify-around flex-1'>
              {
                  form && form?.elements?.map((element) => {
                      return <FormElement formId={form._id} element={element}/>
                  })
              }
          </div>
      </div>
    </div>;
};

export default Form;
