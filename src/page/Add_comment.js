import React, {Component} from 'react';
import axios from 'axios';
import Setting from '../Setting'
import ValidationCostume from '../component/ValidationCostume'

class Add_comment extends Component{
      constructor(props) {
      super(props);
       const { params } = this.props.match;
       this.state = {comment: {postId: params.id, name:'',email:'',body:''}
             ,error:{name:'',email:'',body:''}
       };
     }
    handle_post(){
      
       if(this.state.error.name==='' && this.state.error.email==='' && this.state.error.body===''){
           if(this.state.comment.name==="" ||this.state.comment.email==="" || this.state.comment.body==="" ){
                alert('anda Belum mengisi form');
           }else{
                 axios.post(Setting.url + '/comments',this.state.comment)
                .then(response => {
                   
                    if(response.data !==''){
                        alert('Simpan Comment Berhasil');
                    }
                })
                .catch(function (error) {
                  console.log(error);
                });
           }
       }else{
           alert('Anda Belum mengisi form dengan benar');
       }
    }
    validation_name(){
        if(this.state.comment!==''){
            if(this.state.comment.name===''){
                this.setState({error:{...this.state.error,name:"Nama Harus Di isi"}})
            }if(this.state.comment.name!==''){
                 this.setState({error:{...this.state.error,name:""}})
            }      
        }
    }
    validation_email(){
        if(this.state.comment!==''){
            if(this.state.comment.email===''){
                 this.setState({error:{...this.state.error,email:"Email Harus di isi"}})
            }if(this.state.comment.email!==''){
                 this.setState({error:{...this.state.error,email:""}})
            }         
        }
    }
    validation_body(){
        if(this.state.comment!==''){
            if(this.state.comment.body===''){
                 this.setState({error:{...this.state.error,body:"Body Tidak Boleh Kosong"}})
            }if(this.state.comment.body!==''){
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
                    <h3> Add Comment</h3>
                    </div>
                </div>
            </div>
                
            <div className="container" >
                <form>
                  <div className="form-group">
                     <label htmlFor="name">Name</label>
                     <input type="text" className="form-control" id="name" placeholder="User"
                         value={this.state.comment.name !=='' ? this.state.comment.name : '' } 
                        onChange={(value)=> this.setState({comment:{...this.state.comment,name:value.target.value}},this.validation_name.bind(this))}
                     />
                        {this.state.error.name !==''?<ValidationCostume   msg={this.state.error.name} />:'' }
                </div>
                 <div className="form-group">
                     <label htmlFor="email">Email</label>
                     <input type="email" className="form-control" id="email" placeholder="user@gmail.com"
                         value={this.state.comment.email !=='' ? this.state.comment.email : '' } 
                        onChange={(value)=> this.setState({comment:{...this.state.comment,email:value.target.value}},this.validation_email.bind(this))}
                     />
                        {this.state.error.email !==''?<ValidationCostume   msg={this.state.error.email} />:'' }
                </div>
                 <div className="form-group">
                     <label htmlFor="email">Body</label>
                     <textarea type="text" className="form-control" id="body" placeholder="Comment Positif"
                         value={this.state.comment.body !=='' ? this.state.comment.body : '' } 
                        onChange={(value)=> this.setState({comment:{...this.state.comment,body:value.target.value}},this.validation_body.bind(this))}
                     ></textarea>
                        {this.state.error.body !==''?<ValidationCostume   msg={this.state.error.body} />:'' }
                </div>
                  <button type="button" onClick={this.handle_post.bind(this)} className="btn btn-success">Posting</button>
                </form>
            </div>
     </div>
        );
    }
    
}
export default  Add_comment;