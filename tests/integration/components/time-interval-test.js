import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('time-interval', 'Integration | Component | time interval', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{time-interval}}`);
  assert.ok(this.$());
});
