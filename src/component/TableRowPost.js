import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class TableRowPost extends Component{
      constructor(props) {
      super(props);
     
     }
    
    
    render(){
        return(
        <tr>
             <td>{this.props.id} </td>
            <td> {this.props.obj.id}</td>
            <td> {this.props.obj.title}</td>
            <td> {this.props.obj.body}</td>
            
        </tr>
        );
    }
    
}
export default  TableRowPost;