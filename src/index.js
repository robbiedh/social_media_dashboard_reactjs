import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style/BodyStyle.css';

import History from './component/History';
import NavCostume from './component/NavCostume';
import FootCostume from './component/FootCostume';

import Home from './page/Home';
import List_user from './page/List_user';
import List_post from './page/List_post';
import ListAll_post from './page/ListAll_post';
import List_album from './page/List_album';
import List_comment from './page/List_comment';
import List_photo from './page/List_photo';
import Detail_photo from './page/Detail_photo';
import Edit_comment from './page/Edit_comment';
import Edit_post from './page/Edit_post';
import Add_post from './page/Add_post';
import Add_comment from './page/Add_comment';
import Detail_user from './page/Detail_user';




import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';



const routing = (
  <Router history={History}>
   <div>
   
     <NavCostume />
      <div className="overlay">
      <Route exact path="/" component={Home} />
      <Route path="/users" component={List_user} />
      <Route path="/detail-user/:id" component={Detail_user} />
      <Route path="/post/:id" component={List_post} />
      <Route path="/add-post" component={Add_post} />
      <Route path="/post-all" component={ListAll_post} />
      <Route path="/edit-post/:id" component={Edit_post} />
      <Route path="/album/:id" component={List_album} />
      <Route path="/photo/:id" component={List_photo} />
      <Route path="/add-comment/:id" component={Add_comment} />
      <Route path="/comment/:id" component={List_comment} />
      <Route path="/edit-comment/:id" component={Edit_comment} />
      <Route path="/detail-photo/:id" component={Detail_photo} />
      </div>
     </div>
  <FootCostume />
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
