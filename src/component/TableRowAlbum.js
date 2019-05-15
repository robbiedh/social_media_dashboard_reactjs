import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class TableRowAlbum extends Component{
    
    render(){
        return(
        <tr>
                <td > {this.props.id+1}</td>
                <td> {this.props.obj.title}</td>
                <td> 
                    <Link to={"/photo/"+this.props.obj.id} > 
                        <button type="button" className="btn btn-info"> Lihat Photo </button> 
                    </Link> 
                </td>
        </tr>
        );
    }
    
}
export default  TableRowAlbum;