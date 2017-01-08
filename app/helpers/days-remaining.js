import Ember from 'ember';

export function daysRemaining() {
  const daysUntil = getDaysBetween(new Date(2017, 8, 2), new Date());
  return (daysUntil > 0) ? daysUntil : 'today';
}

export function getDaysBetween(date1, date2) {
  const msPerDay = 86400000;
  return Math.floor((date1.getTime() - date2.getTime()) / msPerDay);
}

export default Ember.Helper.helper(daysRemaining);
