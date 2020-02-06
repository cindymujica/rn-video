import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground
} from 'react-native';

const LayoutContainer = (props) => {
  return (
    <ImageBackground
      source={require('../../../../assets/background.png')}
      style={styles.container}
    >
      <Text style={styles.title}>
        {props.title}
      </Text>
        {props.children}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingVertical: 20,
    paddingHorizontal:10
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom: 10
  }
}) 

export default  LayoutContainer;