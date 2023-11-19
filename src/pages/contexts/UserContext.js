import {createContext, useContext, useState} from 'react';

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [userId, setUserId] = useState("1");

    const setUser = (id) => {
        setUserId(id);
    };

    return (
        <UserContext.Provider value={{userId, setUser}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
