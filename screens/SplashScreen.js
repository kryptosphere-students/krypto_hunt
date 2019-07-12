import React from 'react';
import { StyleSheet, Image, View } from 'react-native';


export default class SplashScreen extends React.Component {
  render() {

    return (
      <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require('../sources/images/logo.jpg')}
      />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  icon:{
    resizeMode: 'contain',
    width:300
  }
});
