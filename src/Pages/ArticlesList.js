import React from 'react';
import articleContent from './article-content';
import {Link} from 'react-router-dom';
const ArticlesList = () => (
    <>
        <h1>Article List</h1>
        {
            articleContent.map(
                (article, key)=>
                <Link key={key} to = {"/article/"+article.name} >
                <h3>{article.title}</h3>
                </Link>
            
            )
        }
        

    </>
);

export default ArticlesList;