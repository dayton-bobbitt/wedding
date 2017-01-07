import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('our-story');
  this.route('registry');
  this.route('travel-info');
});

export default Router;
