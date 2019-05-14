import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
class TableRowUser  extends Component{
    constructor(props) {
      super(props);
     
     }
    render(){
        return(
            <tr>
                 <td>{this.props.id+1} </td>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.username}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.address.street}</td>
                <td>{this.props.obj.address.suite}</td>
                <td>{this.props.obj.address.city}</td>
                <td>{this.props.obj.address.zipcode}</td>
                <td>{this.props.obj.address.geo.lat}</td>
                <td>{this.props.obj.address.geo.lng}</td>
                <td>{this.props.obj.phone}</td>
                <td>{this.props.obj.website}</td>
                <td>{this.props.obj.company.name}</td>
                <td>{this.props.obj.company.catchPhares}</td>
                <td>{this.props.obj.company.bs}</td>
                <td> <Link to={'/post/'+this.props.obj.id}  > <Button color="info" >   Lihat Post </Button> </Link>  </td>
                 <td> <Link to={'/album/'+this.props.obj.id} ><Button color="info" >   Lihat Album </Button></Link> </td>
            </tr>
            
            )
    }
}
export default TableRowUser;