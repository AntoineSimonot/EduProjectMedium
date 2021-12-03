import { useNavigate } from 'react-router';

export default function SingleMessage({article, preview}) {
    let navigate = useNavigate()
    if (preview === true) {
        return (
            <div>
                <li >{article.User.firstname}: {article.title}</li>
                <button onClick={()=>{
                    navigate(`/articles/${article.id}`)
                }}>Show Article</button>
            </div>
        )
    } else {
        return (
        <div>
            <p>{article.User.firstname}: {article.title}</p>
            <p>{article.content}</p>
            <p>{article.ArticleCategory.name}</p>
        </div>
        )
    }
}