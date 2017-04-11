import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend({
  actions: {
    openModal(modal) {
      return this.render(modal, {
        into: 'dashboard',
        outlet: 'modal'
      });
    },

    closeModal() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'dashboard'
      });
    },
  }
});
