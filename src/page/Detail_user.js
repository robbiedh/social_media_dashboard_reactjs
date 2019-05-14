import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import Setting from '../Setting'
import  TableRowUser from '../component/TableRowUser'
class  Detail_user extends Component{
   constructor(props) {
       super(props);
        const { params } = this.props.match;
       this.state = {user: [] ,visible:false,  id_user:  params.id};
        
     }
     componentDidMount(){
          this.setState({  visible:true});
       axios.get(Setting.url + '/users?id='+this.state.id_user)
       .then(response => {
         this.setState({ user: response.data[0] , visible:false});
         console.log('data produk : '+JSON.stringify(this.state.user))
       })
       .catch(function (error) {
         console.log(error);
       })
     }
     
  render(){
    return(
        <div  className="container">
            <div className="row">
                 <div className="col-sm">
                    <h3>   Halaman Detail User </h3>
                 </div>
            </div>
            <div className="row" >
             <div className="col">
                <h5> User Info   </h5>
            </div>
            </div>
            <div className="row">
                <div className="col col-lg-2">
                Id User
                </div>
                 <div className="col-md-auto">
                 {this.state.user.id}
                 </div>
            </div>
            <div className="row">
                <div className="col col-lg-2">
                Username
                </div>
                 <div className="col-md-auto">
                {this.state.user.username}
                 </div>
            </div>
             <div className="row">
                <div className="col col-lg-2">
                Email
                </div>
                 <div className="col-md-auto">
               {this.state.user.email}
                 </div>
            </div>
            <div className="row">
                <div className="col col-lg-2">
                Phone
                </div>
                 <div className="col-md-auto">
               {this.state.user.phone}
                 </div>
            </div>
            <div className="row">
                <div className="col col-lg-2">
                Website
                </div>
                 <div className="col-md-auto">
               {this.state.user.website}
                 </div>
            </div>
            <div className="row">
                <div className="col">
                    <h5>  Address Info </h5>
                </div>
            </div>
            <div className="row">
                <div className="col col-lg-2">
                Street
                </div>
                 <div className="col-md-auto">
                    {this.state.user!=''?this.state.user.address.street:''}
                 </div>
            </div>
             <div className="row">
                <div className="col col-lg-2">
                Suite
                </div>
                 <div className="col-md-auto">
                    {this.state.user!=''?this.state.user.address.suite:''}
                 </div>
            </div>
            <div className="row">
                <div className="col col-lg-2">
                City
                </div>
                 <div className="col-md-auto">
                  {this.state.user!=''?this.state.user.address.city:''}
                 </div>
            </div>
             <div className="row">
                <div className="col col-lg-2">
                Zipcode
                </div>
                 <div className="col-md-auto">
                 {this.state.user!=''?this.state.user.address.zipcode:''}
                 </div>
            </div>
             <div className="row">
                <div className="col col-lg-2">
                Latitude
                </div>
                 <div className="col-md-auto">
                  {this.state.user!=''?this.state.user.address.geo.lat:''}
                 </div>
            </div>
            <div className="row">
                <div className="col col-lg-2">
                Longitude
                </div>
                 <div className="col-md-auto">
                  {this.state.user!=''?this.state.user.address.geo.long:''}
                 </div>
            </div>
             <div className="row">
                <div className="col">
                    <h5>  Company Info </h5>
                </div>
            </div>
            <div className="row">
                <div className="col col-lg-2">
                Name
                </div>
                 <div className="col-md-auto">
                  {this.state.user!=''?this.state.user.company.name:''}
                 </div>
            </div>
            <div className="row">
                <div className="col col-lg-2">
                catchPhrase
                </div>
                 <div className="col-md-auto">
                  {this.state.user!=''?this.state.user.company.catchPhrase:''}
                 </div>
            </div>
            <div className="row">
                <div className="col col-lg-2">
                bs
                </div>
                 <div className="col-md-auto">
                  {this.state.user!=''?this.state.user.company.bs:''}
                 </div>
            </div>
        </div>
        );  
  }
    
}

export default Detail_user;
