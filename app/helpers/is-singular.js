import Ember from 'ember';

export function isSingular(params) {
  return params[0] === 1;
}

export default Ember.Helper.helper(isSingular);
