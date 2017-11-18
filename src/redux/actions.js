import { CHANGE_NAV_COLOR } from './types';

export function changeNavColor(id) {
  return {
    type: CHANGE_NAV_COLOR,
    id,
  };
}
