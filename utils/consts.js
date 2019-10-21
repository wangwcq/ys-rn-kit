import _ from 'lodash';

const consts = {};

/**
 * set consts initial valules
 * @param state
 * @param {string} state.appKey
 */
const initConsts = (state = {}) => {
  _.extend(consts, state);
};

export { consts };
export { initConsts };
