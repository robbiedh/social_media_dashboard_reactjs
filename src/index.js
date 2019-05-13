import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import History from './component/History';
import List_user from './page/List_user';
import List_post from './page/List_post';
import ListAll_post from './page/ListAll_post';
import List_album from './page/List_album';
import List_comment from './page/List_comment';
import List_photo from './page/List_photo';
import Detail_photo from './page/Detail_photo';
import Edit_comment from './page/Edit_comment';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';



const routing = (
  <Router history={History}>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
         <li>
          <Link to="/post-all">Post</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/users" component={List_user} />
      <Route path="/post/:id" component={List_post} />
      <Route path="/post-all" component={ListAll_post} />
      <Route path="/post-edit/:id" component={ListAll_post} />
      <Route path="/album/:id" component={List_album} />
      <Route path="/photo/:id" component={List_photo} />
      <Route path="/comment/:id" component={List_comment} />
      <Route path="/edit-comment/:id" component={Edit_comment} />
      <Route path="/detail-photo/:id" component={Detail_photo} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
