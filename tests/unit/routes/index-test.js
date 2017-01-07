import { moduleFor, test } from 'ember-qunit';

moduleFor('route:index', 'Unit | Route | index', {});

test('should transition to our-story route', function(assert) {
  let route = this.subject({
    replaceWith(routeName) {
      assert.equal(routeName, 'our-story', 'replace with route name rentals');
    }
  });
  route.beforeModel();
});
