import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/userflow/Login';
import Form from "./pages/userflow/Form";
import CreateForm from "./pages/adminflow/CreateForm";
import CreateFiled from "./pages/adminflow/CreateFiled";
import Forms from "./pages/adminflow/Forms";
import {UserProvider} from './contexts/UserContext';
import AllForms from "./pages/userflow/AllForms";
import Home from "./pages/Home";
import AdminLogin from "./pages/adminflow/AdminLogin";

function App() {
    return (
        <div className="App h-screen w-screen flex flex-col overflow-hidden items-center bg-neutral text-tertiary">
            <UserProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        {/*admin flow*/}
                        <Route path="/adminlogin" element={<AdminLogin/>}/>
                        <Route path="/adminforms" element={<Forms/>}/>
                        <Route path="/createform" element={<CreateForm/>}/>
                        <Route path="/createfield" element={<CreateFiled/>}/>
                        {/*user flow*/}
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/forms" element={<AllForms/>}/>
                        <Route path="/form" element={<Form/>}/>
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </div>
    );
}

export default App;
