import React from 'react';
import {
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native'

export default function Category(props) {
  return <ImageBackground style={styles.wrapper}
    source={{
      uri: props.background_image
    }}>
      <Text style={styles.genre}>{props.genres[0]}</Text>
    </ImageBackground>
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems:'center',
    justifyContent: 'center',
    width: 250,
    height: 100,
    borderRadius:8,
    overflow: 'hidden'
  },
  genre: {
    color: 'white',
    fontSize: 30,
    textShadowColor: 'rgba(0,0,0, .75)',
    textShadowOffset: {
      width:2,
      height:2
    }
  }
})