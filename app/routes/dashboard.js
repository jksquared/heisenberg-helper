import Ember from 'ember';

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
