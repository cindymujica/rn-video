import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

export default function Suggestion(props) {
  return <TouchableOpacity onPress={props.onPress} >
    <View style={styles.container}>
      <View style={styles.left}>
        <Image style={styles.poster}
          //source={require("../../../../assets/icon.png")}
          source={{
            uri:props.medium_cover_image
          }}
        />
        <View style={styles.genre}>
          <Text style={styles.genreText}>{props.genres[0]}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.year}>{props.year}</Text>
        <Text style={styles.rate}>{props.rating} Estrellas</Text>
      </View>
    </View>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
  },
  poster:{
    resizeMode: 'contain',
    height:130,
    width:87
  },
  genre: {
    position: 'absolute',
    backgroundColor: 'black',
    padding:2
  },
  genreText: {
    color: 'white',
    fontSize:11,
    fontWeight:'bold'
  },
  right: {
    flexDirection: 'column',
    marginHorizontal:10,
    justifyContent: 'space-between'
  },
  title: {
    fontSize:18
  },
  year: {
    backgroundColor:'black',
    color: 'white',
    fontSize: 11,
    alignSelf: 'auto',
    borderRadius: 5,
    overflow: 'hidden',
    paddingVertical:4,
    paddingHorizontal:5,
    alignSelf: 'flex-start'
  },
  rate: {
    fontSize:13,
    color: '#6b6b6b'
  }
})