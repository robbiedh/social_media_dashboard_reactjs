import React, {Component} from 'react';

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
         
       })
       .catch(function (error) {
         console.log(error);
       })
     }
    
    render(){
        return(
      <div>
        <div className="container">
            <div className="row">
                <div className="col">
                <h3> Detail Photo</h3>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col col-lg-2">
                        <img className="card-img-top" style={{width: '10rem'}} src={this.state.photo.thumbnailUrl} alt="Thumbnail" />
                </div>
                <div className="col col-lg-2">
                           
                            <p className="card-text"> Titile Photo : </p>
                            <p className="card-text">  <p> Titile Album  :   </p></p>
                            <p className="card-text">  <p> Titile Album  :    </p></p>
                </div>
                <div className="col-md-auto">
                    <p>{this.state.photo.title} </p>
                    <p> {this.state.album.title} </p>
                    <p>  <a href={this.state.photo.url} > {this.state.photo.url} </a> </p>
                </div>
                
            </div>
        </div>
       </div>
        );
    }
    
}
export default  Detail_photo;