import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  beforeModel() {
    if (!this.get('session.isAuthenticated')) {
      // alert('Register for an account or login here');

      this.transitionTo('login');
    }
  },

  model() {
    return this.store.findAll('item');
  },

// model() {
//   const id = this.paramsFor('dashboard.item').id;
//
//   return this.store.findRecord('item', id);
// }

  // model(params) {
  //   const id = params.id;
  //
  //   return this.store.findRecord('item', id);
  // }

});
