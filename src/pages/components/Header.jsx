import React, {useEffect, useRef, useState} from 'react';
import BackButton from "./BackButton";
import {DragHandle, Menu, MenuOpen} from "@mui/icons-material";
import Drawer from "./Drawer";
import {useUser} from "../../contexts/UserContext";

const Header = ({title, backPath, children}) => {
    const {userId} = useUser()
    const [drawerVisible, setDrawerVisible] = useState(false)

     const onOffDrawer = ()=> {
         const isVisible = !drawerVisible
         setDrawerVisible(isVisible)
     }

    return (
        <header className="bg-primary h-14 text-blue-50 p-3 w-full flex items-center text-xl justify-between overflow-visible">
            <div className="flex flex-row items-center gap-2" onClick={onOffDrawer}>
                {userId && !drawerVisible && <Menu onClick={onOffDrawer}/>}
                {userId && drawerVisible && <MenuOpen onClick={onOffDrawer}/>}
                {backPath && <BackButton backPath={backPath}/>}
                {title}
            </div>
            {children}
            {
                userId && drawerVisible && <Drawer/>
            }
        </header>
    );
};

export default Header;