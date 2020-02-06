import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default SuggestionLayout = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {props.title}
      </Text>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingVertical: 10,
    flex:1
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom: 10,
    marginLeft: 20
  }
}) 