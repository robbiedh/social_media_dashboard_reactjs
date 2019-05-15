import React, {Component} from 'react';
import axios from 'axios';
import Setting from '../Setting'
import ValidationCostume from '../component/ValidationCostume'

class Edit_post extends Component{
      constructor(props) {
      super(props);
      console.log("ayo ")
        const { params } = this.props.match
       this.state = {post: [], id_post:  params.id,
                         error:{
                             title:'',
                             body:''
                        }
       };
     }
    componentDidMount(){
         axios.get(Setting.url + '/posts?id='+this.state.id_post)
       .then(response => {
         this.setState({ post: response.data[0] });
         
       })
       .catch(function (error) {
         console.log(error);
       })
     }
    handle_update(){
        if(this.state.error.title===''&&this.state.error.body==='' ){
             console.log(this.state.post);
        axios.put(Setting.url + '/posts/'+this.state.id_post,this.state.post)
       .then(response => {
           console.log('respon data  : '+JSON.stringify(response.data))
           if(response.data !==''){
               alert('Update Post Berhasil');
           }
       })
       .catch(function (error) {
         console.log(error);
       })
        }else{
             alert('Form Anda Belum Terlengkapi');
        }
       
    }
    validation_title(){
          if(this.state.post!==''){
            if(this.state.post.title===''){
                this.setState({error:{...this.state.error,title:"Title Harus Di isi"}})
            }if(this.state.post.title!==''){
                 this.setState({error:{...this.state.error,title:""}})
            }      
        }
    }validation_body(){
     if(this.state.post!==''){
            if(this.state.post.body ===''){
                this.setState({error:{...this.state.error,body:"Body Harus Di isi"}})
            }if(this.state.post.body!==''){
                 this.setState({error:{...this.state.error,body:""}})
            }      
        }
    }
    
    render(){
        return(
      <div>
       <div className='container'>
                <div className='row'>
                    <div className='col'>
                    <h3>  Edit  Post</h3>
                    </div>
                </div>
        </div>
        
      <div className="container" >
                <form>
                  <div className="form-group">
                     <label htmlfor="title">Title Post</label>
                     <input type="text" className="form-control" id="title" placeholder="Postingan Positif Hari Ini"
                         value={this.state.post.title !=='' ? this.state.post.title : '' } 
                        onChange={(value)=> this.setState({post:{...this.state.post,title:value.target.value}},this.validation_title.bind(this))}
                     />
                     {this.state.error.title !==''?<ValidationCostume   msg={this.state.error.title} />:'' }
                </div>
                <div className="form-group">
                    <label htmlfor="body">Body Post</label>
                    <textarea className="form-control" id="body" rows="3"
                    value={this.state.post.body !=='' ? this.state.post.body : '' } 
                    onChange={(value)=> this.setState({post:{...this.state.post,body:value.target.value}},this.validation_body.bind(this))}
                    ></textarea>
                     {this.state.error.body !==''?<ValidationCostume   msg={this.state.error.body} />:'' }
                  </div>
                  <button type="button" onClick={this.handle_update.bind(this)} className="btn btn-success">Posting</button>
                </form>
            </div>
      </div>
        );
    }
    
}
export default  Edit_post;