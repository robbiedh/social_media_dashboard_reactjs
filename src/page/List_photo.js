import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import Setting from '../Setting'
import TableRowPhoto from '../component/TableRowPhoto'


class  List_photo extends Component{
    constructor(props) {
       super(props);
        const { params } = this.props.match
       this.state = {photos: [], id_album:  params.id};
      
     }
     componentDidMount(){
         axios.get(Setting.url + '/photos?albumId='+this.state.id_album)
       .then(response => {
         this.setState({ photos: response.data });
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
                            <td>Nomer </td>
                             <td>title  </td>
                             <td>Photo </td>
                          
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.photos.map((data,key)=>
                        <TableRowPhoto key={key} id={key} obj={data}/>
                    )}
                    </tbody>
                </table>
                </div>);
     }
    
}
export default List_photo;