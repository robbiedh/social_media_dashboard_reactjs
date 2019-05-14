import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Setting from '../Setting'
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';

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
    handle_update(){
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
        if(this.state.post.userId==''){
            
        }
    }
    
    render(){
        return(
            <div>
            <Row>
                <Col>
                 <h2> Add Post</h2>
                </Col>
            </Row>
      <Form>
        <FormGroup>
          <Label for="user">Post Dengan User </Label>
          <Input type="select" name="email" id="user" placeholder="Pilih User" 
           value={this.state.post.userId}
           onChange={(value)=>this.setState({post:{...this.state.post,userId:value.target.value}})}
          >
           <option  value="null">--Pilih User--</option>
         {this.state.user.map((data,key)=>
         <option key={key} value={data.id}>{data.name}</option>
         )}
          </Input>
        </FormGroup>
         <FormGroup>
          <Label for="judul">Judul Post </Label>
          <Input type="text" name="judul" id="judul" value={this.state.post.title !='' ? this.state.post.title : '' } 
            onChange={(value)=> this.setState({post:{...this.state.post,title:value.target.value}})} />
        </FormGroup>
        <FormGroup>
          <Label for="body">Body  </Label>
          <Input type="textarea" name="body" id="body" value={this.state.post.body!='' ? this.state.post.body :''  } 
       onChange={(value)=>this.setState({post:{...this.state.post,body:value.target.value}})} />
        </FormGroup>
        
       <FormGroup >
          <Col >
            <Button  color="success" onClick={this.handle_update.bind(this)} >Post</Button>
          </Col>
        </FormGroup>
        
       
      
      
       
      </Form>
      </div>
        );
    }
    
}
export default  Add_post;