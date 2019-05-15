import React, {Component} from 'react';
import axios from 'axios';
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
                <th scope="col">No </th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col"> Email</th>
                <th scope="col"> #</th>
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
