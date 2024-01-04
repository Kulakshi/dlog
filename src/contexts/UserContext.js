import {createContext, useContext, useState, useEffect} from 'react';

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [userId, setUserId] = useState(null);
    const [isRecording, setIsRecording] = useState(null);

    useEffect(() => {
        // Try to retrieve the userId from localStorage
        const cachedUserId = localStorage.getItem('userId');
        if (cachedUserId) {
            // If userId is found in the cache, set it
            setUserId(cachedUserId);
        }
    }, []); // The empty dependency array ensures useEffect runs only once


    const setUser = (id) => {
        console.log(id)
        setUserId(id);
        localStorage.setItem('userId', id);
    };

    return (
        <UserContext.Provider value={{userId, setUser, isRecording, setIsRecording}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
