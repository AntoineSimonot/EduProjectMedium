import React, { useState } from "react";
import { useEffect } from "react";
import { getArticle } from "../Services/API";
import SingleArticle from "../Components/SingleArticle";
import { useParams } from 'react-router-dom';

export default function ShowArticlePage() {
    const [article, setarticle] = useState(null)
    const { id } = useParams();
    
    useEffect(() => {
        getArticle({id})
            .then(res => {
                setarticle(res.data)
            })
    }, [id])

    if (article === null) {
        return <div>Loading...</div>
    }
    else {
        return (
            <div>
                <SingleArticle key={article.id} article={article} preview={false}/>
            </div>
        )
    }
}