import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    addItem(changeset) {
      changeset.save();
      const item = this.store.createRecord('item', this.model);

      item.save();

      this.transitionToRoute('dashboard');
    },

    toggleModal() {
      this.transitionToRoute('dashboard');
    },
  }
});
