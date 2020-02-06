import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/containers/home';
import Movie from './screens/containers/movie';

const Main = createStackNavigator(
  {
    Home: Home,
    Movie: Movie
  },
)

export default createAppContainer(Main);