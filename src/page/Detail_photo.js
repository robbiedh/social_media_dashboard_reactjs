import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Setting from '../Setting'
class Detail_photo extends Component{
      constructor(props) {
      super(props);
        const { params } = this.props.match
       this.state = {photo: [],album :[], id_photo:  params.id};
     }
    componentDidMount(){
       
         axios.get(Setting.url + '/photos?id='+this.state.id_photo)
       .then(response => {
         this.setState({ photo: response.data[0] },this.getdata_album.bind(this));
           console.log('data get photo : '+JSON.stringify(response.data))
       })
       .catch(function (error) {
         console.log(error);
       })
     }
     getdata_album(){
           axios.get(Setting.url + '/albums?id='+this.state.photo.albumId)
       .then(response => {
         this.setState({ album: response.data[0] });
          console.log('data post : '+JSON.stringify(response.data))
       })
       .catch(function (error) {
         console.log(error);
       })
     }
    
    render(){
        return(
      <div>
       
       <p> Titile Photo :  {this.state.photo.title}  </p>
        <p> Titile Album  :  {this.state.album.title}  </p>
        <p> Original Link   : <a href={this.state.photo.url} > {this.state.photo.url} </a>  </p>
        <img src={this.state.photo.thumbnailUrl} />
        
      </div>
        );
    }
    
}
export default  Detail_photo;