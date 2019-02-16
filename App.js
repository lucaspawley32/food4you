import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { MapView } from "expo";

export default class App extends React.Component {

  state = {
    location:null,

    markers:[
      { lat:59,
        lon:17,
        name:"pizza buffet",
        description:"we have pizzas"},
      { lat:59.5,
        lon:17,
        name:"chinese food buffet",
        description:"we have chinese food" },
      { lat:60,
        lon:17,
        name:"jap food buffet",
        description:"we have jap food" }
    ]

  }
  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);

        this.setState({ location });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };
  componentDidMount(){
    this.findCoordinates()
  }

  renderMarkers() {
    markers = [];
    for (marker of this.state.markers) {
      markers.push(
        <MapView.Marker
          coordinate={{
            latitude: marker.lat,
            longitude: marker.lon
          }}
          title={marker.name}
          description={marker.description}
        />
      );
    }
    return markers;
  }


  render() {
    return (
      <MapView
        style={{
          flex: 1
        }}
        initialRegion={{
          latitude: 59.78825,
          longitude: 18.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >

        {this.renderMarkers()}

      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
