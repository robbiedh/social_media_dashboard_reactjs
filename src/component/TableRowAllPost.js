import React, {Component} from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import axios from 'axios';
import Setting from '../Setting'
import  History from './History'
class TableRowAllPost extends Component{
      constructor(props) {
      super(props);
       this.state = {user:[] };
        this.handleDelet = this.handleDelet.bind(this);
     }
     
    handleDelet(){
    let uri = Setting.url + '/posts/'+this.props.obj.id;
    axios.delete(uri)
    .then(response => {
        console.log(response.data);
         alert("Data Berhasil Di Hapus");
        History.push('/post-all');
    })
       .catch(function (error) {
         console.log(error);
       });
 
   
    }
    render(){
        return(
        <tr>
         <td> {this.props.id+1}</td>
        <td> {this.props.obj.title}</td>
        <td> {this.props.obj.body}</td>
         <td>
         <Link to={"comment/"+this.props.obj.id} > <button type="button" class="btn btn-info">Lihat Commentar</button> </Link>
         <input type="submit" onClick={()=> this.handleDelet()}  value="Delete" className="btn btn-danger"/>
         <Link to={"edit-post/"+this.props.obj.id} > <button type="button" class="btn btn-info">  Edit Post </button>  </Link>
           </td>
        </tr>
        );
    }
    
}
export default  TableRowAllPost;