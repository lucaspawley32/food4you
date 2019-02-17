import React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput } from "react-native";
import Modal from 'react-native-modalbox';

let screen = Dimensions.get('window');

export default class AddFood extends React.Component {
  constructor(props) {
    super(props);
  }

  showAddFood = () => {
    this.refs.myAddFood.open();
  }

  render() {
    return (
      <Modal
        ref={'myAddFood'}
        style={{
          justifyContent: 'center',
          width: screen.width - 10,
          height: 200
        }}
        position='center'
        onClose={() => {
          alert("food added");
        }}
      >
        <Text>Please add info about free food!</Text>
        <TextInput
          style={{
            height: 40
          }}
        />
      </Modal>
    );
  }
}
