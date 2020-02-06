import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default (props) =>  {
    const text = "No hay elementos para mostrar!";
    
    return <View style={styles.container}>
      <Text style={styles.text}>{ (props.text)? props.text:text }</Text>
    </View>
}

const styles = StyleSheet.create({
  container: {
    padding:20
  }
})