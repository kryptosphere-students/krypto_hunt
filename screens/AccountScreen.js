import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class AccountScreen extends React.Component{
  render(){
    return (
    <View style={styles.container}>
      <Text>Bienvenu sur la meilleure application de la kryptosphere</Text>
    </View>
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
