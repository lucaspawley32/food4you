import React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput } from "react-native";
import Modal from 'react-native-modalbox';

let screen = Dimensions.get('window');

export default class AddFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      description:''
    }
  }

  showAddFood = () => {
    this.refs.myAddFood.open();
  }

  render() {
    return (
      <Modal
        ref={'myAddFood'}
        style={{
          height: 200
        }}
        position='center'
        onClosed={() => {
          alert("food added: \n" + this.state.name + "\n" + this.state.description);
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            marginTop: 20
          }}
        >Please add info about free food!</Text>

        <TextInput
          style={{
            height: 40,
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
            marginTop: 20,
            marginLeft: 40,
            marginRight: 40
          }}
          onChangeText={(name)=>this.setState({name:name})}
          placeholder="Enter the name of your place"
          value={this.state.name}
        />

        <TextInput
          style={{
            height: 40,
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
            marginTop: 20,
            marginLeft: 40,
            marginRight: 40
          }}
          onChangeText={(description)=>this.setState({description:description})}
          placeholder="Describe your food"
          value={this.state.description}
        />
      </Modal>
    );
  }
}
