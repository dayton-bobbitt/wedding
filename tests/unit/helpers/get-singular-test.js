
import { getSingular } from 'wedding/helpers/get-singular';
import { module, test } from 'qunit';

module('Unit | Helper | get singular');

test('should return singular form of seconds', function(assert) {
  let expected = 'second';
  let actual = getSingular(['seconds']);
  assert.equal(actual, expected);
});

test('should return singular form of minutes', function(assert) {
  let expected = 'minute';
  let actual = getSingular(['minutes']);
  assert.equal(actual, expected);
});

test('should return singular form of hours', function(assert) {
  let expected = 'hour';
  let actual = getSingular(['hours']);
  assert.equal(actual, expected);
});

test('should return singular form of days', function(assert) {
  let expected = 'day';
  let actual = getSingular(['days']);
  assert.equal(actual, expected);
});