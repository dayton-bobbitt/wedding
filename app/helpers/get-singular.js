import Ember from 'ember';

export function getSingular(params) {
  return params[0].substring(0, params[0].length - 1);
}

export default Ember.Helper.helper(getSingular);
