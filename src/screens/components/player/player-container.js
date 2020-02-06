import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ActivityIndicator
} from 'react-native';

import { Video } from 'expo-av';

import Layout from './player-layout';
import ControlLayout from './control-layout';
import PlayPause from './play-pause';
import ProgressBar from './progress-bar-layout';
import TimeLeft from './timeleft'
import Volume from './volume'
import FullScreen from './fullscreen'

export default class Player extends Component {
  state = {
    loading: true,
    pause: false,
    fullScreen: false,
    progress: 0.0,
    duration: 0.00,
    currentTime: 0.00,
    volume: 0,
    muted: true
  }
  //ios - loader
  onBuffer = ({ isBuffering }) =>{
    this.setState({
        loading: isBuffering
    })
  }
  //android - loader
  onLoad = (payload) => {
    this.setState({
        loading: false
    })
  }
  playPause = () => {
    this.setState(function(prevState){ 
        return { pause: !prevState.pause}
    })
  }
  fullScreen = () => {
    this.setState(function(prevState){ 
        return { fullScreen: !prevState.fullScreen}
    })
  }
  onFullScreen = () =>{
    this.fullScreen();
    this.state.fullScreen ? this.video.dismissFullscreenPlayer() : this.video.presentFullscreenPlayer(); //esto no funciona del todo bien 
  }
  videoRef = (element) =>{
      this.video = element;
  }
  onProgress = (playload) => {
    let currentTime = playload.currentTime / 60; //tiempo transcurrido en minutos
    let minutes = Math.floor(currentTime); //tiempo transcurrido sin decimales
    let seconds = currentTime % 1;
    seconds = (seconds * 60) / 1000;
    let time = (minutes + seconds * 10).toFixed(2); //toFixed(2) 2 decimales
    let duration = (playload.seekableDuration / 60).toFixed(2)//seekableDuration: duracion de todo el video
    this.setState({
    currentTime: time,
    progress: (playload.currentTime / playload.seekableDuration),
    duration: duration
    });
  }
  onVolume = () => {
    var volume = this.state.volume + 0.5 
    var muted  = this.state.muted
    if( volume > 1 ){
        volume = 0
        muted = true
    } else {
        muted = false
    }
    this.setState({  
        volume: volume,
        muted: muted
    })
}
  render() {
    return (
      <Layout
        loading={this.state.loading}
        video={
          <Video 
            muted={this.state.muted}
            //source={{uri: 'https://soicos.com/fe/videos/home.mp4'}}
            source={require('../../../../assets/big_buck_bunny_240p_2mb.mp4')}
            style={styles.video}
            resizeMode="contain"
            onBuffer={this.onBuffer}
            onLoad={this.onLoad}
            paused={this.state.pause}
            ref={this.videoRef}
            onProgress={this.onProgress}
            volume={this.state.volume}
          />
        }
        loader={<ActivityIndicator color='white'/>}
        controls={
          <ControlLayout>
            <PlayPause onPress={this.playPause} paused={this.state.paused} />
            <ProgressBar progress={this.state.progress}/>
            <TimeLeft duration={this.state.duration} currentTime={this.state.currentTime}/>
            <Volume
                onPress={this.onVolume}
                volume={this.state.volume}
                muted={this.state.muted}
            />
              <FullScreen fullScreen={this.state.fullScreen} onPress={this.onFullScreen}/>
          </ControlLayout>
        }
      />
    )
  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  }
})