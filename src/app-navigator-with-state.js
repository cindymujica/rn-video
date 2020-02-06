import React, {Component} from 'react'
import { NavigationActions } from 'react-navigation';
import {
  createReduxContainer
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import { shape, string, number, func } from 'prop-types';
import { Alert, BackHandler } from 'react-native';

import AppNavigator from './app-navigator'

const Root = createReduxContainer(AppNavigator, 'root')

class Navigator extends Component {
  static propTypes = {
    dispatch: func.isRequired,
    nav: shape({
      index: number,
      key: string.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const {
      nav, dispatch,
    } = this.props;

    if (nav.index === 0) {
      Alert.alert(
        'Salir de la App',
        '¿Quieres salir de la aplicación?',
        [
          {
            onPress: () => BackHandler.exitApp(),
            text: 'Yes',
          },
          {
            style: 'cancel',
            text: 'Cancel',
          },
        ],
        { cancelable: false }
      );
    }
    dispatch(NavigationActions.back());

    return true;
  };

  render() {
    const {
      nav, dispatch,
    } = this.props;

    return <Root state={nav} dispatch={dispatch} />;
  }
}

const mapStateToProps = ({ nav }) => ({ nav })

export default connect(mapStateToProps)(Navigator)