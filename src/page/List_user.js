import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import Setting from '../Setting'

class  List_user extends Component{
   constructor(props) {
       super(props);
       this.state = {users: [] };
        
     }
     componentDidMount(){
       axios.get(Setting.url + '/users')
       .then(response => {
         this.setState({ users: response.data });
         console.log('data produk : '+JSON.stringify(response.data))
       })
       .catch(function (error) {
         console.log(error);
       })
     }
  render(){
    return(
        <div>
        <h1> Halaman List User {Setting.url} </h1>
        {this.state.users.map((data,key)=>
            <h1> Hello </h1>
        )}
        </div>
        );  
  }
    
}

export default List_user;
