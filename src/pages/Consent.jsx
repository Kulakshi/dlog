import React from 'react';
import PrimaryButton from "./components/PrimaryButton";
import {useNavigate} from 'react-router-dom';
import SecondaryButton from "./components/SecondaryButton";
import Header from "./components/Header";


const Home = () => {

    const nav = useNavigate();
    return <div className='h-full w-full'>
        <Header title={"Consent Form"} backPath={"/"}/>
<       div className='flex flex-col flex-1 h-full w-full overflow-y-scroll p-4 text-left pb-16'>
        <h2 className="font-bold">STUDY DETAILS</h2>
        <p>The purpose of this study is for us to better understand the user experience of DataLog application.
            Your participation in this study will help us modify, develop, or otherwise improve our products and
            services. This study will consist of few tasks that include using the application, video recording,
            questionnaire and 1 to many interview with a member of our research team. </p>


    <br/>
        <h2 className="font-bold">DATA WE WILL COLLECT</h2>
        <p>We will ask you questions about your use of our products and services. We will record the session and we will
            take notes to record your comments. We will not request, and you should not provide, any sensitive personal
            information in this study.</p>

    <br/>
        <h2 className="font-bold">HOW WE WILL USE YOUR DATA</h2>
        <p>Any data, recording or other personal information collected about you will be treated confidentially. We may
            use recordings and notes for internal purposes as we continue to improve our products and services. We may
            also anonymize your responses and aggregate them with the responses of other participants in order to share
            study results externally.</p>

    <br/>
        <h2 className="font-bold">YOUR RIGHTS</h2>
        <p>Your participation in this study is voluntary. You can take a break or discontinue participation at any time
            without giving a reason. If you have any questions or concerns about this study or if you wish to withdraw
            your consent in the future, please email sellage.fernando@ip-paris.fr or mengfei.gao@ip-paris.fr.</p>

    <br/>

        <h2 className="font-bold">YOUR CONSENT</h2>
        <p>I give my consent:

            For the session to be recorded
            For individuals at DataLog or IP-Paris to use the recordings and notes for internal purposes
            For DataLog or IP-Paris to aggregate and anonymize my data to share study results externally</p>

    <br/>
        <p className="font-bold">By clicking Agree, you acknowledge that you are 18 years of age or older and have read and understood the
            information in this Research Consent Form.</p>

    <br/>
        <div className="flex flex-row gap-2 w-full mt-3">
            <SecondaryButton onClick={()=>nav("/")} label="Not agree" className="w-1/2"/>
            <PrimaryButton onClick={()=>nav("/login")} label="Agree" className="w-1/2"/>
        </div>
        </div>
    </div>;
};

export default Home;
