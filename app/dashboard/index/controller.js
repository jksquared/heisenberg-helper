import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
      this.transitionToRoute('login');
    },

    deleteItem(item) {
      item.destroyRecord();
    },
  },
});