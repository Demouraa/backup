import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './app.css';

import Home from './components/view//home/home';
import Login from './components/view/login/login';
import PostArticle from './components/view/postaArticle/postArticle';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/postArticle' component={PostArticle} />
      </BrowserRouter>
    </div>
  );
}

export default App;