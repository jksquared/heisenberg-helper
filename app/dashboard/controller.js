import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},
  isShowingModal: false,
  session: Ember.inject.service(),

  resetNewItem() {
    this.set('newItem', {});
  },

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    },

    async addItem() {
      const item = this.store.createRecord('item', this.formValues);

      await item.save();

      this.resetNewItem();
      this.toggleProperty('isShowingModal');
      // transitionToRoute needs to be changed to wait for the add item button to be clicked.
      // This is activating the closeOutlet function.
    },

    toggleModal() {
      this.toggleProperty('isShowingModal');
    }
  }
});
