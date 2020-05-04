import * as React from 'react';
import {useState} from 'react'
import { StyleSheet, Text, View,Animated, Dimensions  } from 'react-native';
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height



export default function App() {

  const [width, setWidth] = useState(new Animated.Value(windowWidth/4))
  const [heigth, setHeigth] = useState(new Animated.Value(windowHeight/12))
  const [count, setCount] = useState(new Animated.Value(0))

  Animated.timing(count, {
    toValue: 100,
    duration: 3000,
  }).start()

  Animated.sequence([
    Animated.timing(heigth, {
      toValue: windowHeight + 30,
      duration: 3000,
    }),
    Animated.timing(width, {
      toValue: windowWidth,
      duration: 2000,
    })
  ]).start()
 

  return (
    <View style={styles.container}>
      <View style={styles.loadView}>
        <Animated.Text style={styles.text}>{count}</Animated.Text>
        <Animated.View style={[styles.square,
        {
          width: width,
          height: heigth,
        }]}></Animated.View>
       
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
    backgroundColor: "#58dd71"
  },
  text:{
    fontSize: 20
  }
 
});
