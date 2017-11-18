import { combineReducers } from 'redux';
import { CHANGE_NAV_COLOR } from './types';

export function background(state = ['#4CAF50', '#333', '#333', '#333'], action) {
  switch (action.type) {
    case CHANGE_NAV_COLOR:
      const color = ['#333', '#333', '#333', '#333'];
      color[action.id] = '#4CAF50';
      return color;
    default:
      return state;
  }
}

export default combineReducers({ background });
