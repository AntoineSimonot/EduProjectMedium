import React, { createContext, useEffect, useState } from 'react';
import { getArticles, getCategories } from '../Services/API';

export const ArticleContext = createContext()
export const ArticleProvider = (props) => {

    const [articles, setArticles] = useState([]);
    const [categories, setCategories] = useState([]);
    


    useEffect(() => {  
    
        getCategories().then((data) => {
            setCategories(data)
        })
        
        getArticles().then((data) => {
            setArticles(data) 
        })

    }, [])
    

    return (
        <ArticleContext.Provider value={{articles, categories}} >
            {props.children}
        </ArticleContext.Provider>
    )

}