import { combineReducers } from 'redux';
import { CHANGE_NAV_COLOR } from './types';

export function background(state = ['#67AECA', '#675682', '#675682', '#675682'], action) {
  switch (action.type) {
    case CHANGE_NAV_COLOR:
      const color = ['#675682', '#675682', '#675682', '#675682'];
      color[action.id] = '#67AECA';
      return color;
    default:
      return state;
  }
}

export default combineReducers({ background });
