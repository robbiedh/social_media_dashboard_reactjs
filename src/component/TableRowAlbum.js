import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class TableRowAlbum extends Component{
      constructor(props) {
      super(props);
     
     }
    
    
    render(){
        return(
        <tr>
                <td> {this.props.id+1}</td>
                <td> {this.props.obj.id}</td>
                <td> {this.props.obj.title}</td>
                <td> <Link to={"/photo/"+this.props.obj.id} > Lihat Photo </Link> </td>
        </tr>
        );
    }
    
}
export default  TableRowAlbum;