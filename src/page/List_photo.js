import React, {Component} from 'react';
import axios from 'axios';
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
                <div className="container">
                    <div className="row">
                        <div className="col" >
                            <h3> List  Photo  </h3>
                        </div>
                    </div>
                </div>
                    <div className="container">
                    <div className="row">
                        
                            {this.state.photos.map((data,key)=>
                                <TableRowPhoto key={key} id={key} obj={data}/>
                            )}
                       
                    </div>
                   </div>
                </div>);
     }
    
}
export default List_photo;