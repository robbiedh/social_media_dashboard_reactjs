import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class TableRowPhoto extends Component{
      constructor(props) {
      super(props);
     
     }
    
    
    render(){
        return(
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={this.props.obj.thumbnailUrl} alt="Thumbail" />
                <div className="card-body">
                    <p className="card-text">{this.props.obj.title}</p>
                </div>
            </div>
        );
    }
    
}
export default  TableRowPhoto;