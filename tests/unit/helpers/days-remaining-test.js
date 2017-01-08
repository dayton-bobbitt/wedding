
import { getDaysBetween } from 'wedding/helpers/days-remaining';
import { module, test } from 'qunit';

module('Unit | Helper | days remaining');

test('it works', function(assert) {
  let expected = 15;

  const date1 = new Date(2017, 0, 16);
  const date2 = new Date(2017, 0, 1);

  let actual = getDaysBetween(date1, date2);

  assert.equal(actual, expected);
});

