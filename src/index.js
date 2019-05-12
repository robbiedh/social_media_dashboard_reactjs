import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import List_user from './page/List_user';
import List_post from './page/List_post';
import List_album from './page/List_album';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';



const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
         <li>
          <Link to="/post">Post</Link>
        </li>
       
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/users" component={List_user} />
     <Route path="/post/:id" component={List_post} />
      <Route path="/album/:id" component={List_album} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
