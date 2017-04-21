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
    this.route('add-time', { path: '/item/:item_id/new-time' });
    this.route('timer', { path: '/item/:item_id/timer' });
    this.route('item', { path: '/items' }, function () {
      this.route('new');
      this.route('edit', { path: '/:item_id/edit' });
    });
  });
});
export default Router;
