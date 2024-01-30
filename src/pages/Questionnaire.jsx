import React from 'react';
import PrimaryButton from "./components/PrimaryButton";
import {useNavigate} from 'react-router-dom';
import Header from "./components/Header";


const Questionnaire = () => {

    const nav = useNavigate();
    const url = 'https://docs.google.com/forms/d/e/1FAIpQLSc3R-IwSgWaGeh4G6DpRfOx_SrsXsT8weCEjE_ay4y9km0XfA/viewform?fbzx=3050516787061044895';

    return <div className='h-full w-full'>
        <Header title={"Your final feedback"} backData={"/"}/>
             <iframe
                title="Google Form"
                src={url}
                width={window.screen.width}
                height={window.screen.height - 50}
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                Loading...
              </iframe>
    </div>;
};

export default Questionnaire;
