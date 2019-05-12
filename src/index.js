import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import List_user from './page/List_user';
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
       
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/users" component={List_user} />
    
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
