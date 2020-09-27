import React from 'react';
import ArticlesList from '../Components/ArticlesList'
import articleContent from './article-content';

const ArticlesListPage = () => (
    <>
        <h1>Article List</h1>
        <ArticlesList articles = {articleContent} />
    </>
);

export default ArticlesListPage;