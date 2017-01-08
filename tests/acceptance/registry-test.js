import { test } from 'qunit';
import moduleForAcceptance from 'wedding/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | registry');

test('visiting /registry', function(assert) {
  visit('/registry');

  andThen(function() {
    assert.equal(currentURL(), '/registry');
  });
});

test('should include common header', function(assert) {
  visit('/registry');
  andThen(() => {
    assert.equal(exists('.header'), true, 'should show the header');
  });
});

test('should include common links', function(assert) {
  visit('/registry');
  andThen(() => {
    assert.equal(exists('.links'), true, 'should show the links');
  });
});

test('should link to our story', function(assert) {
  visit('/registry');
  click('a:contains("Our Story")');
  andThen(() => {
    assert.equal(currentURL(), '/our-story', 'should navigate to our story');
  });
});

test('should link to registry', function(assert) {
  visit('/registry');
  click('a:contains("Registry")');
  andThen(() => {
    assert.equal(currentURL(), '/registry', 'should navigate to regristry');
  });
});

test('should link to travel-info', function(assert) {
  visit('/registry');
  click('a:contains("Travel Information")');
  andThen(() => {
    assert.equal(currentURL(), '/travel-info', 'should navigate to travel information');
  });
});

test('should have a title', function(assert) {
  visit('/registry');
  andThen(() => {
    assert.equal(exists('.title'), true, 'should have a title element');
  });
});

test('should have a title of Registry', function(assert) {
  visit('/registry');
  andThen(() => {
    assert.equal(find('.title').text(), 'Registry', 'should have title Registry');
  });
});

function exists(selector) {
  return find(selector).length > 0;
}
