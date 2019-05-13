import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Setting from '../Setting'
class Edit_comment extends Component{
      constructor(props) {
      super(props);
        const { params } = this.props.match
       this.state = {comment: [], id_comment:  params.id};
     }
    componentDidMount(){
       
         axios.get(Setting.url + '/comments?id='+this.state.id_comment)
       .then(response => {
         this.setState({ comment: response.data[0] });
           console.log('data get photo : '+JSON.stringify(response.data))
       })
       .catch(function (error) {
         console.log(error);
       })
     }
  
    
    render(){
        return(
      <div>
       <h2> Edit  Comment</h2>
       <p> Name  :    <input 
       value={this.state.comment.name } 
       onChange={(value)=>this.setState({comment:{...this.state.comment,name:value}})} /> </p>
        <p> Email  :   <input 
       value={this.state.comment.email } 
       onChange={(value)=>this.setState({comment:{...this.state.comment,email:value}})} />  </p>
        <p> Body    :  <input 
       value={this.state.comment.body } 
       onChange={(value)=>this.setState({comment:{...this.state.comment,body:value}})} />  </p>
        
        
      </div>
        );
    }
    
}
export default  Edit_comment;