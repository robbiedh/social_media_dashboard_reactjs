import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class TableRowPhoto extends Component{
      constructor(props) {
      super(props);
     
     }
    
    
    render(){
        return(
        <tr>
                
                 <td>{this.props.id} </td>
                <td> {this.props.obj.title}</td>
                <td><img  src={this.props.obj.thumbnailUrl} /></td>
                  <td><Link to={"/detail-photo/"+this.props.obj.id} > Detail Photo  </Link></td>
        </tr>
        );
    }
    
}
export default  TableRowPhoto;