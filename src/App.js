import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import StartForm from './pages/userflow/StartForm';
import Form from "./pages/userflow/Form";
import CreateForm from "./pages/adminflow/CreateForm";
import CreateFiled from "./pages/adminflow/CreateFiled";
import Forms from "./pages/adminflow/Forms";
import {UserProvider} from './contexts/UserContext';
import AllForms from "./pages/userflow/AllForms";

function App() {
    return (
        <div className="App h-screen w-screen bg-blue-400 flex flex-col overflow-hidden items-center">
            <UserProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<StartForm/>}/>
                        <Route path="/form" element={<Form/>}/>
                        <Route path="/createform" element={<CreateForm/>}/>
                        <Route path="/createfield" element={<CreateFiled/>}/>
                        <Route path="/forms" element={<AllForms/>}/>
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </div>
    );
}

export default App;
