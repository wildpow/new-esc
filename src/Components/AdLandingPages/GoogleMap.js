import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import mapStyles from './mapStyles.json';

const defaultMapOptions = {
  styles: mapStyles
};
class GoogleMapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
  render() {
    const style = {
      width: '94vw',
      height: '200px',
      position: 'relative',
      display: 'flex',
      'marginLeft': 'auto',
      'marginRight': 'auto'
    }
    const containerStyle={position: 'relative'}
    return (
      <Map
        containerStyle={containerStyle}
        defaultOptions={defaultMapOptions}
        styles = {mapStyles}
        xs={ 12 }
        style={style}
        google = { this.props.google }
        onClick={this.onMapClick }
        zoom={ 16.6 }
        initialCenter={{ lat: 47.90504, lng: -122.242032 }}
      >
        <Marker
          animation={ this.props.google.maps.Animation.DROP}
          onClick={ this.onMarkerClick }
          title={ 'E.S.C Mattress Center' }
          position={{ lat: 47.90524, lng: -122.241332 }}
          name={ 'E.S.C Mattress Center' }
        />
        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        >
        <h3>E.S.C Mattress Center</h3>
        </InfoWindow>
      </Map>

    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyD0mkvjqWR2YJNyjY7erwkABQfC4YcEW98')
})(GoogleMapContainer)