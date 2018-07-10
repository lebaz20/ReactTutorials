import React, { Component } from 'react';

class Map extends Component {
  componentDidMount() {
    // component has mounted, so we can access DOM
    const { lat, lon, name } = this.props;
    // bind map to referenced html element
    const map = L.map(this.refs.map).setView([lat, lon], 13);
    // add Mapbox Streets tile layer to our map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  }

  render() {
    // ref short for reference, is the corresponding DOM element reference
    // can be accessed by this.refs.{name}
    return <div ref="map" />;
  }
}

export default Map;
