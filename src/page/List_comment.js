import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import Setting from '../Setting'
import TableRowComment from '../component/TableRowComment'


class  List_comment extends Component{
    constructor(props) {
       super(props);
        const { params } = this.props.match
       this.state = {comments: [], id_post:  params.id};
      
     }
     componentDidMount(){
         axios.get(Setting.url + '/comments?userId='+this.state.id_post)
       .then(response => {
         this.setState({ comments: response.data });
         console.log('data post : '+JSON.stringify(response.data))
       })
       .catch(function (error) {
         console.log(error);
       })
     }
     render(){
         return(<div>
                <h1> List  Comment  </h1>
                <table>
                    <thead>
                        <tr>
                            <td>Nomer  </td>
                            <td>Id  </td>
                             <td>Name </td>
                             <td>Email </td>
                             <td>Body  </td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.comments.map((data,key)=>
                        <TableRowComment key={key} id_post={this.state.id_post} id={key} obj={data}/>
                    )}
                    </tbody>
                </table>
                </div>);
     }
    
}
export default List_comment;