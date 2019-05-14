import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import History from './component/History';
import NavCostume from './component/NavCostume';
import { Container } from 'reactstrap';

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


import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';



const routing = (
  <Router history={History}>
    <Container>
      <NavCostume />
     
      <Route exact path="/" component={App} />
      <Route path="/users" component={List_user} />
      <Route path="/post/:id" component={List_post} />
      <Route path="/add-post" component={Add_post} />
      <Route path="/post-all" component={ListAll_post} />
      <Route path="/edit-post/:id" component={Edit_post} />
      <Route path="/album/:id" component={List_album} />
      <Route path="/photo/:id" component={List_photo} />
      <Route path="/comment/:id" component={List_comment} />
      <Route path="/edit-comment/:id" component={Edit_comment} />
      <Route path="/detail-photo/:id" component={Detail_photo} />
     
    </Container>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
