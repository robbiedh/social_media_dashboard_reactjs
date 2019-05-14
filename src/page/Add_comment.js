import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Setting from '../Setting'


class Add_comment extends Component{
      constructor(props) {
      super(props);
       const { params } = this.props.match;
       this.state = {comment: {postId: params.id, name:'',email:'',body:''}};
     }
   
   
    handle_post(){
       
        axios.post(Setting.url + '/comments',this.state.comment)
       .then(response => {
           console.log('respon data  : '+JSON.stringify(response.data))
           if(response.data !=''){
               alert('Simpan Comment Berhasil');
           }
       })
       .catch(function (error) {
         console.log(error);
       })
    }
    validation_user(){
       
    }
    
    render(){
        return(
            <div>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                    <h3> Add Comment</h3>
                    </div>
                </div>
            </div>
                
            <div className="container" >
                <form>
                  <div className="form-group">
                     <label htmlFor="name">Name</label>
                     <input type="text" className="form-control" id="name" placeholder="User"
                         value={this.state.comment.name !='' ? this.state.comment.name : '' } 
                        onChange={(value)=> this.setState({comment:{...this.state.comment,name:value.target.value}})}
                     />
                </div>
                 <div className="form-group">
                     <label htmlFor="email">Email</label>
                     <input type="email" className="form-control" id="email" placeholder="user@gmail.com"
                         value={this.state.comment.email !='' ? this.state.comment.email : '' } 
                        onChange={(value)=> this.setState({comment:{...this.state.comment,email:value.target.value}})}
                     />
                </div>
                 <div className="form-group">
                     <label htmlFor="email">Body</label>
                     <textarea type="text" className="form-control" id="body" placeholder="Comment Positif"
                         value={this.state.comment.body !='' ? this.state.comment.body : '' } 
                        onChange={(value)=> this.setState({comment:{...this.state.comment,body:value.target.value}})}
                     ></textarea>
                </div>
                  <button type="button" onClick={this.handle_post.bind(this)} className="btn btn-success">Posting</button>
                </form>
            </div>
     </div>
        );
    }
    
}
export default  Add_comment;