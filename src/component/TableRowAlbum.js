import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class TableRowAlbum extends Component{
      constructor(props) {
      super(props);
     
     }
    
    
    render(){
        return(
        <tr>
            
                <td> {this.props.obj.id}</td>
                <td> {this.props.obj.title}</td>
               
        </tr>
        );
    }
    
}
export default  TableRowAlbum;