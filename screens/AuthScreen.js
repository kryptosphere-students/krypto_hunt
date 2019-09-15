import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AuthForm from '../components/AuthForm.js';


export default class AuthScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      ethAddress:''
    }
  }
  render(){
    return (
    <View style={styles.container}>
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
  <Button
          title="Connexion"
          onPress={() => this.props.navigation.navigate('App')}
  />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
