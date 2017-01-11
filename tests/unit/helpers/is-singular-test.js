
import { isSingular } from 'wedding/helpers/is-singular';
import { module, test } from 'qunit';

module('Unit | Helper | is singular');

test('should return true if equal to 1', function(assert) {
  let expected = true;
  let actual = isSingular([1]);
  assert.equal(actual, expected);
});

test('should return false if not 1', function(assert) {
  let expected = false;
  let actual = isSingular([4]);
  assert.equal(actual, expected);
});