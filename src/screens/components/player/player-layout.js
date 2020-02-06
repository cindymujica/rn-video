import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default function Layout(props) {
  return (
    <View style={styles.container}>
      <View style={styles.video}>
        {props.video}
      </View>
      <View style={styles.loader}>
        {
          props.loading && props.loader
        }
      </View>
      {props.controls}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '56.25%',
  },
  video: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
  },
  loader: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignSelf: 'center'
  }
})