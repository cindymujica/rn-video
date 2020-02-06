import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  StatusBar
} from 'react-native';

export default function Header(props) {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
        />
        <View style={styles.right}>
          {props.children}
        </View>
      </View>  
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main:{
    borderBottomColor: '#DADADA',
    borderBottomWidth: 2,
    marginTop: StatusBar.currentHeight,
    minHeight:56
  },
  container: {
    paddingVertical:13,
    paddingHorizontal:10,
    flexDirection: 'row',
  },
  logo: {
    height: 32,
    width: 165,
    resizeMode: 'contain'
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    //backgroundColor:'#DADADA'
  }
})