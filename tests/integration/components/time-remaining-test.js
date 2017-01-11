import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('time-remaining', 'Integration | Component | time remaining', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{time-remaining}}`);
  assert.ok(this.$());
});
