import React, { createContext, useEffect, useState } from 'react';
import { getArticles, getCategories, getToken, me } from '../Services/API';
export const GarbageContext = createContext()

export const GarbageProvider = (props) => {

    const [user, setUser] = useState([]);
    const [articles, setArticles] = useState([]);
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {  
        getCategories().then((data) => {
            setCategories(data)
        })
        getArticles().then((data) => {
            setArticles(data) 
        })

        if (getToken()) {
            me().then((data) => {
                setUser(data.data)
            })
        }
    }, [])

    return (
        <GarbageContext.Provider value={{user, setUser, articles, categories}} >
            {props.children}
        </GarbageContext.Provider>
    )

}