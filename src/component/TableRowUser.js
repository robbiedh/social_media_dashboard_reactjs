import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TableRowUser  extends Component{
    constructor(props) {
      super(props);
     
     }
    render(){
        return(
            <tr>
                 <td  scope="row">{this.props.id+1} </td>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.username}</td>
                <td>{this.props.obj.email}</td>
                  <td> <Link to={'/detail-user/'+this.props.obj.id}  > <button className="btn btn-info btn-sm" >Detail User</button> </Link>  
                 <Link to={'/post/'+this.props.obj.id}  > <button className="btn btn-info btn-sm" >Lihat Post</button> </Link>  
                 <Link to={'/album/'+this.props.obj.id} ><button className="btn btn-info btn-sm" >Lihat Album</button></Link> </td>
                 
            </tr>
            
            )
    }
}
export default TableRowUser;