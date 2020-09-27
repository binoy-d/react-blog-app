import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ArticlePage from './Pages/ArticlePage'
import ArticlesList from './Pages/ArticlesList'

import Navbar from './Components/NavBar'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div id="page-body">
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/articles-list" component={ArticlesList} />
          <Route path="/article/:name" component={ArticlePage} />
        </div>
      </div>
    </Router>

  );
}

export default App;
