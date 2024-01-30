import React, {useEffect, useRef, useState} from 'react';
import BackButton from "./BackButton";
import {DragHandle} from "@mui/icons-material";
import {useUser} from "../../contexts/UserContext";
import {useNavigate} from "react-router-dom";

const Drawer = () => {
    const {userRole,removeUser} = useUser()
    const nav = useNavigate()

    return (
        <div className="absolute top-12 left-0 h-full w-52 bg-primary z-40 text-left text-sm p-4">
            {userRole === "ADMIN" && <p className="font-bold text-white py-5" onClick={()=>{
                removeUser()
                nav('/login')
            }}> Login as User </p>}
            {userRole === "USER" && <p className="font-bold text-white py-5" onClick={()=>{
                removeUser()
                nav('/admin/login')
            }}> Login as Admin </p>}
            <hr/>
            <p className="font-bold text-white py-5" onClick={()=>{
                removeUser()
                nav('/')
            }}> Logout </p>
        </div>
    );
};

export default Drawer;