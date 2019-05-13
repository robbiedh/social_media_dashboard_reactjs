import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Setting from '../Setting'

class Edit_post extends Component{
      constructor(props) {
      super(props);
        const { params } = this.props.match
       this.state = {post: [], id_post:  params.id};
     }
    componentDidMount(){
         axios.get(Setting.url + '/posts?id='+this.state.id_post)
       .then(response => {
         this.setState({ post: response.data[0] });
            console.log('respon data post : '+JSON.stringify(response.data))
       })
       .catch(function (error) {
         console.log(error);
       })
     }
    handle_update(){
        axios.put(Setting.url + '/posts/'+this.state.id_post,this.state.post)
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
       <h2> Edit  Post</h2>
       <p> Judul :    <input 
       value={this.state.post.title !='' ? this.state.post.title : '' } 
       onChange={(value)=>this.setState({post:{...this.state.post,title:value.value}})} /> </p>
      
        <p> Body    :  <input 
       value={this.state.post.body!='' ? this.state.post.body :''  } 
       onChange={(value)=>this.setState({post:{...this.state.post,body:value.value}})} />  </p>
        <input type="submit" onClick={this.handle_update.bind(this)}  />
      </div>
        );
    }
    
}
export default  Edit_post;