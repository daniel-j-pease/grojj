
import React, { Component} from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'

class SaveMap extends Component {

  render() {
    const mapContainer = <div style={{height: '100%', width:'100%'}}></div>
    const markers = this.props.markers.map((venue, i) => {
      const marker = {
        position: {
          lat: venue.location.lat,
          lng: venue.location.lng
        }
      }
      return <Marker
        key={i}
        {...marker}
        />
    })

    return (

  <GoogleMapLoader
    containerElement = { mapContainer }
    googleMapElement = {
        <GoogleMap
          defaultZoom={15}
          defaultCenter={this.props.center}
          options={{streetViewControl: false, mapTypeControl: false}}>

          { markers }
        </GoogleMap>
      } />

      )
  }
}
<<<<<<< HEAD
export default saveMap;
=======

export default SaveMap;
>>>>>>> 4c0a18d0f0017bbcd357d1ef25a2874c060cc85b
