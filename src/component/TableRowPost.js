import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class TableRowPost extends Component{

    render(){
        return(
        <tr>
             <td>{this.props.id+1} </td>
            <td> {this.props.obj.title}</td>
            <td> {this.props.obj.body}</td>
             <td><Link to={"/add-comment/"+this.props.obj.id} ><button type="button" class="btn btn-success" >Comment</button> </Link>  </td>
            
        </tr>
        );
    }
    
}
export default  TableRowPost;