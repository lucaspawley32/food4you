import React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput } from "react-native";
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

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
          height: 260
        }}
        position='center'
        onClosed={() => {
          if (this.state.name.length != 0 && this.state.description.length != 0) {
            alert("Food added: \n" + this.state.name + "\n" + this.state.description);
          }
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

        <Button
          style={{ color: 'white' }}
          containerStyle={{
            padding: 8,
            height: 40,
            marginTop: 30,
            marginLeft: 90,
            marginRight: 90,
            borderRadius: 5,
            backgroundColor: 'mediumseagreen'
          }}
          onPress={()=>{
            if (this.state.name.length == 0 || this.state.description.length == 0) {
              alert("You need to enter the name of your place and describe your food");
              return;
            }
            this.refs.myAddFood.close();
          }}
        >Save</Button>
      </Modal>
    );
  }
}
