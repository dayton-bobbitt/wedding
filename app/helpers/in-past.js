import Ember from 'ember';

export function inPast(timeRemaining) {
  return timeRemaining.days < 0;
}

export default Ember.Helper.helper(inPast);
