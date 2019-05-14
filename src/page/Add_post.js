import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Setting from '../Setting'


class Add_post extends Component{
      constructor(props) {
      super(props);
      
       this.state = {user :[], error:{userId:false, title:false, body:false },
       post: {userId:'',title:'',body:''}};
     }
   
    componentDidMount(){
       
         axios.get(Setting.url + '/users')
       .then(response => {
         this.setState({ user: response.data });
           console.log('data get photo : '+JSON.stringify(response.data))
       })
       .catch(function (error) {
         console.log(error);
       })
     }
    handle_post(){
        console.log(this.state.post);
        axios.post(Setting.url + '/posts',this.state.post)
       .then(response => {
           console.log('respon data  : '+JSON.stringify(response.data))
           if(response.data !=''){
               alert('Simpan Post Berhasil');
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
                    <h3> Add Post</h3>
                    </div>
                </div>
            </div>
                
            <div className="container" >
                <form>
                  <div className="form-group">
                    <label htmlfor="user">Pilih User </label>
                     <select id="user" className="form-control"    
                        value={this.state.post.userId}
                        onChange={(value)=>this.setState({post:{...this.state.post,userId:value.target.value}})}>
                         <option  value="">--Pilih User--</option>
                            {this.state.user.map((data,key)=>
                             <option key={key} value={data.id}>{data.name}</option>
                            )}
                   </select>
                  </div>
                  <div className="form-group">
                     <label htmlfor="title">Title Post</label>
                     <input type="text" className="form-control" id="title" placeholder="Postingan Positif Hari Ini"
                         value={this.state.post.title !='' ? this.state.post.title : '' } 
                        onChange={(value)=> this.setState({post:{...this.state.post,title:value.target.value}})}
                     />
                </div>
                <div className="form-group">
                    <label htmlfor="body">Body Post</label>
                    <textarea className="form-control" id="body" rows="3"
                    value={this.state.post.body !='' ? this.state.post.body : '' } 
                    onChange={(value)=> this.setState({post:{...this.state.post,body:value.target.value}})}
                    ></textarea>
                  </div>
                  <button type="button" onClick={this.handle_post.bind(this)} className="btn btn-success">Posting</button>
                </form>
            </div>
     </div>
        );
    }
    
}
export default  Add_post;