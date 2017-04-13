import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('register');
  this.route('login');
  this.route('dashboard', function () {
    this.route('item', { path: '/items' }, function () {
      this.route('new');
      this.route('detail', { path: '/:item_id' }, function () {
        this.route('new');
      });
    });
  });
});
export default Router;
