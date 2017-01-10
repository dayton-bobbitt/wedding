import { test } from 'qunit';
import moduleForAcceptance from 'wedding/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | our story');

test('should redirect to our-story route', function(assert) {
  visit('/');
  andThen(() => {
    assert.equal(currentURL(), '/our-story', 'should redirect automatically');
  });
});

test('should include common header', function(assert) {
  visit('/');
  andThen(() => {
    assert.equal(exists('#header'), true, 'should show the header');
  });
});

test('should include common links', function(assert) {
  visit('/');
  andThen(() => {
    assert.equal(exists('.links'), true, 'should show the links');
  });
});

test('should link to our story', function(assert) {
  visit('/');
  click('a:contains("Our Story")');
  andThen(() => {
    assert.equal(currentURL(), '/our-story', 'should navigate to our story');
  });
});

test('should link to registry', function(assert) {
  visit('/');
  click('a:contains("Registry")');
  andThen(() => {
    assert.equal(currentURL(), '/registry', 'should navigate to regristry');
  });
});

test('should link to travel-info', function(assert) {
  visit('/');
  click('a:contains("Travel Information")');
  andThen(() => {
    assert.equal(currentURL(), '/travel-info', 'should navigate to travel information');
  });
});

test('should have a title', function(assert) {
  visit('/');
  andThen(() => {
    assert.equal(exists('.body .title'), true, 'should have a title element');
  });
});

test('should have a title of Our Story', function(assert) {
  visit('/');
  andThen(() => {
    assert.equal(find('.title').text(), 'Our Story', 'should have title Our Story');
  });
});

function exists(selector) {
  return find(selector).length > 0;
}