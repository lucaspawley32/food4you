import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { MapView } from "expo";

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      latitude:0,
      longitude:0,
      markers:[
        { lat:45.423,
          lon:-75.6,
          name:"pizza place",
          description:"we have pizza" },
        { lat:45.423,
          lon:-75.65,
          name:"hot dog place",
          description:"we have hot dogs" },
        { lat:45.263,
          lon:-75.665,
          name:"cake place",
          description:"we have cakes" }
      ]
    }
  }

  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {

        this.setState({
          latitude:position.coords.latitude,
          longitude:position.coords.longitude
        });
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

  onPress(data) {
    let lat = data.nativeEvent.coordinate.latitude;
    let lon = data.nativeEvent.coordinate.longitude;
    if (Math.abs(lat-this.state.latitude) < 0.01 && Math.abs(lon-this.state.longitude) < 0.01) {
      alert("please add food");
    } else {
    }
  }

  render() {
    let center = this.state
    return (
      <MapView
        style={styles.map}
        showsUserLocation={true}
        initialRegion={{
          latitude: 	45.3990,
          longitude: -75.6871,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}

        onPress={this.onPress.bind(this)}
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
  map:{
    ...StyleSheet.absoluteFillObject
  }
});
