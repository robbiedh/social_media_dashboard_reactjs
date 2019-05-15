import React, {Component} from 'react';
import axios from 'axios';
import Setting from '../Setting'
import ValidationCostume from '../component/ValidationCostume'

class Add_post extends Component{
      constructor(props) {
      super(props);
      
       this.state = {user :[], 
                error:{userId:'', title:'', body:'' },
                post: {userId:'',title:'',body:''},
       };
     }
   
    componentDidMount(){
       
         axios.get(Setting.url + '/users')
       .then(response => {
         this.setState({ user: response.data });
         
       })
       .catch(function (error) {
         console.log(error);
       })
     }
    handle_post(){
        if(this.state.error.userId==="" && this.state.error.title==="" && this.state.error.body===""){
           if(this.state.post.userId==="" ||this.state.post.title==="" || this.state.post.body==="" ){
                 alert('Anda Belum  mengisi form');
            }else{
                console.log(this.state.post);
                 axios.post(Setting.url + '/posts',this.state.post)
                .then(response => {
                    console.log('respon data  : '+JSON.stringify(response.data))
                    if(response.data !==''){
                        alert('Simpan Post Berhasil');
                    }
                })
                .catch(function (error) {
                  console.log(error);
                })
            }
                 
        }else{
              alert('Form Belum Anda isi sercara komplit');
        }
            
    }
     validation_user(){
          if(this.state.post!==''){
            if(this.state.post.userId===''){
                this.setState({error:{...this.state.error,userId:"Anda Harus memilih user"}})
            }if(this.state.post.userId!==''){
                 this.setState({error:{...this.state.error,userId:""}})
            }      
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
                        onChange={(value)=>this.setState({post:{...this.state.post,userId:value.target.value}},this.validation_user.bind(this))}>
                         <option  value="">--Pilih User--</option>
                            {this.state.user.map((data,key)=>
                             <option key={key} value={data.id}>{data.name}</option>
                            )}
                   </select>
                     {this.state.error.userId !==''?<ValidationCostume   msg={this.state.error.userId} />:'' }
                  </div>
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
                  <button type="button" onClick={this.handle_post.bind(this)} className="btn btn-success">Posting</button>
                </form>
            </div>
     </div>
        );
    }
    
}
export default  Add_post;