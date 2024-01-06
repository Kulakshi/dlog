import {createContext, useContext, useState, useEffect} from 'react';

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [userId, setUserId] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const [isRecording, setIsRecording] = useState(null);

    useEffect(() => {
        // Try to retrieve the userId from localStorage
        const cachedUserId = localStorage.getItem('userId');
        const cachedUserRole = localStorage.getItem('userRole');
        if (cachedUserId && cachedUserRole) {
            setUserId(cachedUserId);
            setUserRole(cachedUserRole)
        }
    }, []); // The empty dependency array ensures useEffect runs only once


    const setUser = (id, role) => {
        console.log(id,role)
        setUserId(id);
        setUserRole(role)
        localStorage.setItem('userId', id);
        localStorage.setItem('userRole', role);
    };


    const removeUser = (id, role) => {
        setUserId(null);
        setUserRole(null)
        localStorage.removeItem('userId');
        localStorage.removeItem('userRole');
    };

    return (
        <UserContext.Provider value={{userId, userRole, setUser, removeUser, isRecording, setIsRecording}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
