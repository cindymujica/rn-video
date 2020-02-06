import React, {Component} from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

export default (props) =>  {
  
    return <View style={styles.separator} />
}

const styles = StyleSheet.create({
  separator: {
    flex:1,
    marginHorizontal: 5
  }
})
