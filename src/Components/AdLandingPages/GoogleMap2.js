import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';

// const StyledImage = styled.img`
//   max-width: 70px;
//   max-height: 70px;
// `;

// const LogoImage = () => <div><StyledImage src={Logo} alt="this"/></div>;

class GoogleMapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 47.905314,
      lng:  -122.241732
    },
    zoom: 16.6
  };

  render() {
    return (
      <div style={{ height: '100px', width: '150px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyD0mkvjqWR2YJNyjY7erwkABQfC4YcEW98' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/* <LogoImage
            lat={47.905562}
            lng={-122.24182}
          /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMapContainer;