import React from 'react';
import articleContent from './article-content';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article=>article.name===name);
    if (!article){
        return (
            <h1>Article doesnt exist</h1>
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
        </>
    );


}

export default ArticlePage;