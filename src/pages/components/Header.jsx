import React from 'react';

const Header = ({title}) => {
    return (
        <header className="bg-primary text-blue-50 mb-3 p-3 w-full flex items-center justify-center text-xl">
            {title}
        </header>
    );
};

export default Header;