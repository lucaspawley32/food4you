import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { MapView } from "expo";

export default class App extends React.Component {
<<<<<<< HEAD

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

=======
  constructor(props){
    super(props);
    this.state = {
      latitude:0,
      longitude:0,
      markers:[
        { lat:45.423,
          lon:-75.6 },
        { lat:45.423,
          lon:-75.65 },
        { lat:45.263,
          lon:-75.665 }
      ]
    }
>>>>>>> f562ed760830d2b4b47adee728645efc0ef373ee
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
