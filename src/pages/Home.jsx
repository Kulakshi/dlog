import React from 'react';
import SubmitButton from "./components/SubmitButton";
import {useNavigate} from 'react-router-dom';


const Home = () => {

    const nav = useNavigate();
    return <div className='bg-amber-200 flex flex-col flex-1 justify-between p-5 h-full w-full overflow-y-scroll'>
        <SubmitButton label={"I want to design a form"} onClick={() => {
            nav("/adminforms")
        }}/>
        <SubmitButton label={"I want to enter data"} onClick={() => {
            nav("/answer")
        }}/>
    </div>;
};

export default Home;
