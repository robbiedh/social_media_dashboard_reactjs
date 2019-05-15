import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Setting from '../Setting'
import  History from './History'
class TableRowComment extends Component{
      constructor(props) {
      super(props);
       this.state = {user:[] };
        this.handleDelet = this.handleDelet.bind(this);
     }
    handleDelet(){
    let uri = Setting.url + '/comments/'+this.props.obj.id;
    axios.delete(uri)
    .then(response => {
        console.log(response.data);
         alert("Comment  Berhasil Di Hapus");
        History.push('/comment/'+this.props.id_post);
    })
       .catch(function (error) {
         console.log(error);
       });
 
   
    }
    
    render(){
        return(
        <tr>
         <td> {this.props.id+1}</td>
        <td> {this.props.obj.name}</td>
        <td> {this.props.obj.email}</td>
        <td> {this.props.obj.body}</td>
        <td>
            <input type="submit" onClick={()=> this.handleDelet()}  value="Delete Comment" className="btn btn-danger"/>
            <Link to={"/edit-comment/"+this.props.obj.id} > <button type="button" className="btn btn-info">  Edit Comment </button>  </Link>
        </td>
       
        </tr>
        );
    }
    
}
export default  TableRowComment;