import React from 'react';
import {
  TouchableHighlight,
  //TouchableOpacity,
  //TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

function PlayPause(props) {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={styles.container}
      underlayColor="red"
      hitSlop={{
        left: 5,
        top: 5,
        bottom: 5,
        right: 5,
      }}

    >
      { props.paused ? 
        <Icon name="play" size={20} style={styles.button}/> : 
        <Icon name="pause" size={20} style={styles.button}/>
      }
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'gray',
  }
})

export default PlayPause;