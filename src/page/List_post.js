import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import Setting from '../Setting'
import TableRowPost from '../component/TableRowPost'



class  List_post extends Component{
    constructor(props) {
       super(props);
        const { params } = this.props.match
       this.state = {posts: [], id_user:  params.id};
       console.log(this.state.id_user);
     }
     componentDidMount(){
         axios.get(Setting.url + '/posts?userId='+this.state.id_user)
       .then(response => {
         this.setState({ posts: response.data });
         console.log('data post : '+JSON.stringify(response.data))
       })
       .catch(function (error) {
         console.log(error);
       })
     }
     render(){
         return(<div>
                <h1> List  Post User </h1>
                <table>
                    <thead>
                        <tr>
                            <td>Id Post </td>
                             <td>Judul Post </td>
                            <td> Body Post </td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.posts.map((data,key)=>
                        <TableRowPost key={key} obj={data}/>
                    )}
                    </tbody>
                </table>
                </div>);
     }
    
}
export default List_post;