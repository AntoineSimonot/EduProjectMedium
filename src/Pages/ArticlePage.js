import React from "react";
import { useContext } from 'react';
import { GarbageContext } from "../Provider/GarbageProvider";
import SingleArticle from "../Components/SingleArticle";

export default function ArticlePage() {
    const { articles } = useContext(GarbageContext)
        
    return (
        <ul>
        {articles.map( article => {
            return <SingleArticle key={article.id} article={article} preview={true}/>
        })}
    </ul>
    )

}