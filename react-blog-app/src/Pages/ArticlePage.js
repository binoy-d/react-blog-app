import React, { useState, useEffect } from 'react';
import articleContent from './article-content';
import ArticlesList from '../Components/ArticlesList';
import CommentsList from '../Components/CommentsList';
import UpvotesSection from '../Components/UpvotesSection';
import NotFoundPage from './NotFoundPage';
const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);


    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
    //runs when component mounts and updates one of the things in the array
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('/api/articles/' + name);
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchData();
    }, [name]);


    const otherArticles = articleContent.filter(article => article.name !== name);

    if (!article) {
        return (
            <NotFoundPage />
        );
    }
    return (
        <>
            <h1>{article.title}</h1>
            <UpvotesSection articleName = {name} upvotes = {articleInfo.upvotes} setArticleInfo = {setArticleInfo}/>
            {
                article.content.map(
                    (para, key) => (
                        <p key={key}>{para}</p>
                    )
                )

            }

            <CommentsList comments = {articleInfo.comments}/>
            <h2>Other Articles:</h2>
            <ArticlesList articles={otherArticles} />
        </>
    );


}

export default ArticlePage;