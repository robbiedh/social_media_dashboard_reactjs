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
         console.log(this.state.comment);
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
        return(<div>
            <div className="container">
                <div className="row">
                    <div className="col">
                      <h3> Edit  Comment</h3>
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
                  <button type="button" onClick={this.handle_update.bind(this)} className="btn btn-success">Comment</button>
                </form>
            </div>
        </div>
        );
    }
    
}
export default  Edit_comment;