
import React, { Component} from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'
// import { GoogleMap } from 'google-map-react';

class saveMap extends Component {

  render() {
    const mapContainer = <div style={{height: '100%', width:'100%'}}></div>
//We are accessing a property called markers from the parent component then iterating throup map function, and for every element in the array we are creating a marker variable with a position key so google maps knows where to put the marker. then returning marker component from react google maps
    const markers = this.props.markers.map((venue, i) => {
      const marker = {
        position: {
          lat: venue.location.lat,
          lng: venue.location.lng
        }
      }
      return <Marker key={i} {...marker} />
    })



    return (
//This is the map component taken from GoogleMapLoader @ 1:12 mins
  <GoogleMapLoader
    containerElement = { mapContainer }
    googleMapElement = {
        <GoogleMap
          // apiKey={AIzaSyDu1zOGCMJEMn2Ja45WRuyWFN_Rv7ZSh3cY} // set if you need stats etc ...
          defaultZoom={15}
          defaultCenter={this.props.center}
          options={{streetViewControl: false, mapTypeControl: false}}>

          { markers }
        </GoogleMap>
      } />

      )
  }
}
export default saveMap;
