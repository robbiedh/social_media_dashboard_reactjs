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
    handle_update(){
        axios.put(Setting.url + '/comments/'+this.state.id_comment,this.state.comment)
       .then(response => {
      
           console.log('respon data  : '+JSON.stringify(response.data))
           if(response.data !=''){
               alert('Update Comment Berhasil');
           }
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
       value={this.state.comment.name !='' ? this.state.comment.name : ''  } 
       onChange={(value)=>this.setState({comment:{...this.state.comment,name:value.value}})} /> </p>
        <p> Email  :   <input 
       value={this.state.comment.email !=''? this.state.comment.email : ''   } 
       onChange={(value)=>this.setState({comment:{...this.state.comment,email:value.value}})} />  </p>
        <p> Body    :  <input 
       value={this.state.comment.body!='' ? this.state.comment.body :''   } 
       onChange={(value)=>this.setState({comment:{...this.state.comment,body:value.value}})} />  </p>
        <input type="submit" onClick={this.handle_update.bind(this)}  />
      </div>
        );
    }
    
}
export default  Edit_comment;