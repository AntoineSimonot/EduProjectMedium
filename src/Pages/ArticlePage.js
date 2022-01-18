import React from "react";
import { useContext } from 'react';
import SingleArticle from "../Components/SingleArticle";
import { ArticleContext } from "../Provider/ArticleProvider";

export default function ArticlePage() {
    const { articles } = useContext(ArticleContext)
        
    return (
        <ul>
        {articles.map( article => {
            return <SingleArticle key={article.id} article={article} preview={true}/>
        })}
    </ul>
    )

}