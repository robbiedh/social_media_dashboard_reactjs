import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Setting from '../Setting'
import TableRowAllPost from '../component/TableRowAllPost'


class  ListAll_post extends Component{
    constructor(props) {
       super(props);
        const { params } = this.props.match
       this.state = {posts: [] };
      
     }
     componentDidMount(){
         axios.get(Setting.url + '/posts')
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
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <h3> List  All Post  </h3>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Link to="/add-post" ><button type="button" class="btn btn-info" >  Add Post  </button> </Link>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>Judul </td>
                            <td>Body </td>
                             <td>#</td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.posts.map((data,key)=>
                        <TableRowAllPost key={key} id={key} obj={data}/>
                    )}
                    </tbody>
                </table>
                </div>
                </div>
                </div>);
     }
    
}
export default ListAll_post;