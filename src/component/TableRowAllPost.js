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
     componentDidMount(){
        //  count self=this;
         axios.get(Setting.url + '/users?id='+this.props.obj.userId)
       .then(response => {
         this.setState({ user: response.data[0] });
        //   console.log('data post : '+JSON.stringify(response.data))
       })
       .catch(function (error) {
         console.log(error);
       })
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
         <td> {this.props.id}</td>
        <td> {this.props.obj.id}</td>
        <td> {this.state.user.username}</td>
         <td> {this.state.user.email}</td>
        <td> {this.props.obj.title}</td>
        <td> {this.props.obj.body}</td>
         <td>
         <Link to={"comment/"+this.props.obj.id} > Lihat Commentar </Link>
         <input type="submit" onClick={()=> this.handleDelet()}  value="Delete" className="btn btn-danger"/>
         <Link to={"edit-post/"+this.props.obj.id} > Edit Post  </Link>
         
           </td>
        </tr>
        );
    }
    
}
export default  TableRowAllPost;