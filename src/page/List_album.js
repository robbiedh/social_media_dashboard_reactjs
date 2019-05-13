import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
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
         console.log('data post : '+JSON.stringify(response.data))
       })
       .catch(function (error) {
         console.log(error);
       })
     }
     render(){
         return(<div>
                <h1> List  Album User </h1>
                <table>
                    <thead>
                        <tr>
                            <td>Nomer  </td>
                            <td>Id Album </td>
                             <td>Judul Album </td>
                          
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.albums.map((data,key)=>
                        <TableRowAlbum key={key} id={key} obj={data}/>
                    )}
                    </tbody>
                </table>
                </div>);
     }
    
}
export default List_album;