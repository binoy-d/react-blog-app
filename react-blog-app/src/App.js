import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ArticlePage from './Pages/ArticlePage'
import ArticlesListPage from './Pages/ArticlesListPage'
import NotFoundPage from './Pages/NotFoundPage'
import Navbar from './Components/NavBar'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div id="page-body">
          <Switch>{/*only displays first route to match */}
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/articles-list" component={ArticlesListPage} />
            <Route path="/article/:name" component={ArticlePage} />
            <Route component={NotFoundPage} /> {/*must come last */}
          </Switch>

        </div>
      </div>
    </Router>

  );
}

export default App;
