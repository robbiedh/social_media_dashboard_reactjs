import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) =>  <span className="badge badge-danger">{text}</span>;
 
class MapCostume extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    console.log(this.props.center)
    return (
      
      // Important! Always set the container height explicitly
      <div style={{ height: '500px', width: '500px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAnVIWXO2Wn6wyGfGDuMnXKZ4vP-sqfxL0' }}
          defaultCenter={this.defaultProps}
          center={this.props.center}
          defaultZoom={11}
        >
          <AnyReactComponent
            lat={this.props.lat}
            lng={this.props.long}
            text="User Location"
          />
        
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default MapCostume;