import { combineReducers } from 'redux';

import navigation from './navigation';
import videos from './videos';

const reducers = combineReducers({
  nav: navigation,
  videos
})


export default reducers;