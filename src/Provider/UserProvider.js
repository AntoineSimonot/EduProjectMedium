import React, { createContext, useEffect, useState } from 'react';
import { getToken, me } from '../Services/API';
export const UserContext = createContext()
export const UserProvider = (props) => {

    const [user, setUser] = useState([]);
    const [connected, setConnected] = useState(false);

    const setUserData = () => {
        me().then((data) => {
            setUser(data.data)
            setConnected(true)
        })
    }


    useEffect(() => {  
    
        if (getToken()) {
            setUserData()
        }

    }, [])
    

    return (
        <UserContext.Provider value={{user, setUser, connected, setConnected}} >
            {props.children}
        </UserContext.Provider>
    )

}