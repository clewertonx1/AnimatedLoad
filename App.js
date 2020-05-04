import * as React from 'react';
import { Platform, StyleSheet, Text, View,Animated } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.loadView}>
        <Text style={styles.text}>0</Text>
        <View style={styles.square}></View>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  loadView:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    borderTopRightRadius: 10, 
    width: 100,
    height: 50,
    backgroundColor: "#58dd71"
  },
  text:{
    fontSize: 20
  }
 
});
