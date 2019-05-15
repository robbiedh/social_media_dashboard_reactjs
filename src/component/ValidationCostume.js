import React, {Component} from 'react';

class ValidationCostume extends Component{
    render(){
               return(
                 <div className="alert alert-danger" role="alert">
                {this.props.msg}
                </div>
                );
            } 
    
}
export default  ValidationCostume;