import React, {Component} from 'react';
import { Link } from "react-router-dom";


class TableRowPhoto extends Component{
    
    
    render(){
        return(
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={this.props.obj.thumbnailUrl} alt="Thumbnail" />
                <div className="card-body">
                    <p className="card-text">{this.props.obj.title}</p>
                    <Link to={"/detail-photo/"+this.props.obj.id}><button type="button" class="btn btn-info" >Detail</button></Link>
                </div>
            </div>
        );
    }
    
}
export default  TableRowPhoto;