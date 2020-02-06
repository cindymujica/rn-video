import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Animated
} from 'react-native';

import MovieLayout from '../components/movie';
import Player from '../../screens/components/player/player-container';
import Header from '../../layouts/header';
import Close from '../../layouts/close';
import Details from '../../screens/components/movie/detail';

class Movie extends Component {
  state = {
    opacity: new Animated.Value(0),
  }
  static navigationOptions = ({ nav }) => {
    return {
      header: (
        <Header>
          <Close
            onPress={()=> { nav.goBack() }}
          />
        </Header>
      )
    }
  }
  closeVideo = () => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: null,
      }
    })
  }
  componentDidMount() {
    Animated.timing(
      this.state.opacity,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start();
  }
  render() {
    return (
      <Animated.View
        style={{
          flex: 1,
          opacity: this.state.opacity,
        }}
      >
        <MovieLayout>

          <Player />
          <Details {...this.props.movie}/>
        </MovieLayout>
      </Animated.View>
    )
  }
}

function mapStateToProps(state) {
  return {
    movie: state.videos.selectedMovie
  }
}

export default connect(mapStateToProps)(Movie)