import React, {Component} from 'react';
import axios from 'axios';
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
      
       })
       .catch(function (error) {
         console.log(error);
       })
     }
     render(){
         return(<div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h3> List  Comment  </h3>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <table  className="table">
                                    <thead>
                                        <tr>
                                            <td>Nomer  </td>
                                             <td>Name </td>
                                             <td>Email </td>
                                             <td>Body  </td>
                                             <td>#  </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.comments.map((data,key)=>
                                        <TableRowComment key={key} id_post={this.state.id_post} id={key} obj={data}/>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>);
     }
    
}
export default List_comment;