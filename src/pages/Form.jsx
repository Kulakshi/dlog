import React from 'react';
import SubmitButton from "./components/SubmitButton";
import Scale from "./components/Scale";
import TimeStampButton from "./components/TimeStampButton";
import {addEntry} from "../services/form";



const Form = () => {
  return <div className='bg-amber-200 flex flex-col flex-1 w-full justify-between'>
      <div className='flex flex-wrap flex-1 justify-between p-4 gap-2'>
          <div className='flex flex-row gap-2 justify-around flex-1'>
              <Scale setValue={(val)=>addEntry(1,1,{value:val})}/>
              <Scale setValue={(val)=>addEntry(1,2,{value:val})}/>
              <Scale setValue={(val)=>addEntry(1,3,{value:val})}/>
          </div>
          <div className='flex flex-col gap-2 justify-around flex-1'>
              <TimeStampButton label={"I have a new idea"} onClick={()=>addEntry(1,4)}/>
              <TimeStampButton label={"Some people in the team are merging my idea"} onClick={()=>addEntry(1,5)}/>
              <TimeStampButton label={"Some people in the team are creating a new idea from my idea"} onClick={()=>addEntry(1,6)}/>
          </div>
      </div>
    </div>;
};

export default Form;
