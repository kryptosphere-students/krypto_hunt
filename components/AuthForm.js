import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class AuthForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      ethAddress:''
    }
  }

  render(){
    return (
    <View>
      <Input
      placeholder='INPUT WITH CUSTOM ICON'
      leftIcon={
        <Icon
          name='user'
          size={24}
          color='white'
        />
      }
      style={styles.textInput}
      value={this.state.ethAddress}
      onChangeText={(ethAddress) => this.setState({ethAddress})}
/>
    

    </View>
  );
}
}

const styles = StyleSheet.create({
  textInput:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10
    }
});
