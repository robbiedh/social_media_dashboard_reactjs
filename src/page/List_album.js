import React, {Component} from 'react';
import axios from 'axios';
import Setting from '../Setting'
import TableRowAlbum from '../component/TableRowAlbum'


class  List_album extends Component{
    constructor(props) {
       super(props);
        const { params } = this.props.match
       this.state = {albums: [], id_user:  params.id};
      
     }
     componentDidMount(){
         axios.get(Setting.url + '/albums?userId='+this.state.id_user)
       .then(response => {
         this.setState({ albums: response.data });
      
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
                            <h3> List  Album User </h3>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="table-responsive">
                         <table className="table">
                             <thead>
                                 <tr>
                                     <td>No  </td>
                                     <td>Name Album </td>
                                      <td>#</td>
                                 </tr>
                             </thead>
                             <tbody>
                             {this.state.albums.map((data,key)=>
                                 <TableRowAlbum key={key} id={key} obj={data}/>
                             )}
                             </tbody>
                         </table>
                    </div>
                </div>
                </div>);
     }
    
}
export default List_album;