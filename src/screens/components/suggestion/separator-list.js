import React, {Component} from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

export default (props) =>  {
  
    return <View style={[
      styles.separator,
      {borderColor: (props.color) ? props.color : '#eaeaea'}
    ]}>
    </View>
}

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 2,
  }
})