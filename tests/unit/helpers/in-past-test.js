
import { inPast } from 'wedding/helpers/in-past';
import { module, test } from 'qunit';

module('Unit | Helper | in past');

// Replace this with your real tests.
test('should return false if there is time remaining', function(assert) {
  let timeRemaining = {
    days: 5
  };

  let expected = false;
  let actual = inPast(timeRemaining);
  assert.equal(actual, expected, 'Should only be false if time is in the past');
});

test('should return true if there is no time remaining', function(assert) {
  let timeRemaining = {
    days: -2
  };

  let expected = true;
  let actual = inPast(timeRemaining);
  assert.equal(actual, expected, 'Should return true if time is in the past');
});