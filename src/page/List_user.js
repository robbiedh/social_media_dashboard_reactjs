import React, {Component} from 'react';
import axios from 'axios';
import { Container, Row, Col, Spinner } from 'reactstrap';
import { Table } from 'reactstrap';
import { Link } from 'react-router';
import Setting from '../Setting'
import  TableRowUser from '../component/TableRowUser'
class  List_user extends Component{
   constructor(props) {
       super(props);
       this.state = {users: [] ,visible:false};
        
     }
     componentDidMount(){
          this.setState({  visible:true});
       axios.get(Setting.url + '/users')
       .then(response => {
         this.setState({ users: response.data , visible:false});
         console.log('data produk : '+JSON.stringify(response.data))
       })
       .catch(function (error) {
         console.log(error);
       })
     }
     
  render(){
    return(
        <div>
       
        <Row>
            <Col><h1> Halaman List User  </h1></Col>
        </Row>
          {this.state.visible ?<Row> <Col xs="auto" > <Spinner /> </Col> </Row>:   
         <Row>
      <Col>
        <Table dark size={{width:'100%'}}>
          <thead>
            <tr>
                <td>Nomer </td>
                <td>ID</td>
                <td> Name</td>
                <td>Username</td>
                <td> Email</td>
                <td> Street</td>
                <td> suite</td>
                <td> city</td>
                <td> zipcode</td>
                <td> latitude</td>
                <td> Longitude</td>
                <td> Phone</td>
                <td> Website</td>
                <td> Company Name</td>
                <td> Company catchpharse</td>
                <td> Company bs</td>
                <td> Post User</td>
                <td>Album User</td>
            </tr>
            </thead>
            <tbody>
                {this.state.users.map((data,key)=>
                  <TableRowUser key={key} id={key} obj={data} />
                )}
            </tbody>
        </Table>
       </Col>
       </Row>
          }
        </div>
        );  
  }
    
}

export default List_user;
