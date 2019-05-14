import React, {Component} from 'react';
import axios from 'axios';

import { Link } from 'react-router';
import Setting from '../Setting';
import  TableRowUser from '../component/TableRowUser';
import  '../style/TableStyle.css';
class  List_user extends Component{
   constructor(props) {
       super(props);
       this.state = {users: [] ,visible:false};
        
     }
     componentDidMount(){
          this.setState({  visible:true});
       axios.get(Setting.url + '/users')
       .then(response => {
         this.setState({ users: response.data , visible:false});
         console.log('data produk : '+JSON.stringify(response.data))
       })
       .catch(function (error) {
         console.log(error);
       })
     }
     
  render(){
    return(
        <div  className="container" >
         <div className="row "> 
            <div className="col-md-auto" >
            <h3> Halaman List User  </h3>
            </div>
        </div>
       <div  className="table-responsive" >
        <table className="table" >
          <thead className="thead-drak">
            <tr>
                <td scope="col">No </td>
                <td scope="col">Name</td>
                <td scope="col">Username</td>
                <td scope="col"> Email</td>
                <td scope="col"> #</td>
            </tr>
            </thead>
            <tbody>
                {this.state.users.map((data,key)=>
                  <TableRowUser key={key} id={key} obj={data} />
                )}
            </tbody>
        </table>
        </div>
        </div>
        );  
  }
    
}

export default List_user;
