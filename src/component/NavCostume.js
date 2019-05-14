import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavCostume extends Component{
    constructor(props) {
    super(props);
    
  }
 
render(){
    return(
    <nav className="navbar navbar-dark bg-dark">
  <a className="navbar-brand" > <span className="badge badge-secondary"> Dashboard Media Social </span> </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
     <li className="nav-item active">
        <Link className="nav-link"  to="/">Home</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link"  to="/users">Users</Link>
      </li>
       <li className="nav-item active">
        <Link className="nav-link"  to="/post-all">Post</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link"  to="/add-post">Add Post</Link>
      </li>
    </ul>
   
  </div>
</nav>);
}
}
export default NavCostume;