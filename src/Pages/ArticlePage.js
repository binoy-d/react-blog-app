import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../Components/ArticlesList'

import NotFoundPage from './NotFoundPage';
const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article=>article.name===name);

    const otherArticles = articleContent.filter(article=>article.name!==name);

    if (!article){
        return (
            <NotFoundPage />
        );
    }
    return (
        <>
            <h1>{article.title}</h1>
            {
                article.content.map(
                    (para, key)=>(
                    <p key={key}>{para}</p>
                    )
                )

            }
            <h2>Other Articles:</h2>
            <ArticlesList articles= {otherArticles}/>
        </>
    );


}

export default ArticlePage;