import React from 'react';
import BackButton from "./BackButton";

const Header = ({title, backPath, children}) => {
    return (
        <header className="bg-primary text-blue-50 mb-3 p-3 w-full flex items-center text-xl justify-between">
            <div className="flex flex-row items-center gap-2">
                {backPath && <BackButton backPath={backPath}/>}
                {title}
            </div>
            {children}
        </header>
    );
};

export default Header;