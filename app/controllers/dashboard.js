import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    async addItem() {
      const item = this.store.createRecord('item', this.formValues);

      await item.save();

      this.set('formValues', {});
      this.transitionToRoute('dashboard.index');
      // transitionToRoute needs to be changed to wait for the add item button to be clicked.
      // This is activating the closeOutlet function.
    }
  }
});
