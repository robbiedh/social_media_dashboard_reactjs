import React, {Component} from 'react';
import axios from 'axios';
import Setting from '../Setting'
import ValidationCostume from '../component/ValidationCostume'
class Edit_comment extends Component{
      constructor(props) {
      super(props);
        const { params } = this.props.match
       this.state = {comment: '', id_comment:  params.id, 
                        error:{
                             name:'',
                             email:'',
                             body:''
                        }};
     }
    componentDidMount(){
         axios.get(Setting.url + '/comments?id='+this.state.id_comment)
       .then(response => {
         this.setState({ comment: response.data[0]  });
         
       })
       .catch(function (error) {
         console.log(error);
       })
     }
    handle_update(){
        if(this.state.error.body===''&&this.state.error.email===''&&this.state.error.name===''){
             console.log(this.state.comment);
            axios.put(Setting.url + '/comments/'+this.state.id_comment,this.state.comment)
            .then(response => {
                if(response.data !==''){
                    alert('Update Comment Berhasil');
                }
            })
            .catch(function (error) {
                console.log(error);
            })
        }else{
             alert('Form Anda Belum Lengkap');
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
                         value={this.state.comment.name  || '' } 
                        onChange={(value)=> this.setState({comment:{...this.state.comment,name:value.target.value}},this.validation_name.bind(this))}
                     />
                       {this.state.error.name !==''?<ValidationCostume   msg={this.state.error.name} />:'' }
                </div>
                 <div className="form-group">
                     <label htmlFor="email">Email</label>
                     <input type="email" className="form-control" id="email" placeholder="user@gmail.com"
                         value={this.state.comment.email  || '' } 
                        onChange={(value)=> this.setState({comment:{...this.state.comment,email:value.target.value}},this.validation_email.bind(this))}
                     />
                    {this.state.error.email !==''?<ValidationCostume   msg={this.state.error.email} />:'' }
                </div>
                 <div className="form-group">
                     <label htmlFor="email">Body</label>
                     <textarea type="text" className="form-control" id="body" placeholder="Comment Positif"
                         value={this.state.comment.body || '' } 
                        onChange={(value)=> this.setState({comment:{...this.state.comment,body:value.target.value}},this.validation_body.bind(this))}
                     ></textarea>
                      {this.state.error.body !==''?<ValidationCostume   msg={this.state.error.body} />:'' }
                </div>
                  <button type="button" onClick={this.handle_update.bind(this)} className="btn btn-success">Comment</button>
                </form>
            </div>
        </div>
        );
    }
    
}
export default  Edit_comment;