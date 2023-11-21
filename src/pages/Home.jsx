import React from 'react';
import PrimaryButton from "./components/PrimaryButton";
import {useNavigate} from 'react-router-dom';


const Home = () => {

    const nav = useNavigate();
    return <div className='flex flex-col flex-1 h-full w-full'>
        <button className='border border-primary m-4 h-full rounded-2xl text-lg font-normal text-primary'
            onClick={() => {
            nav("/adminforms")
        }}>
            I want to design a form
        </button>
        <button className='text-blue-50 bg-primary m-4 mt-0 h-full rounded-2xl text-lg font-normal'
            onClick={() => {
            nav("/answer")
        }}>
            I want to enter data
        </button>
    </div>;
};

export default Home;
