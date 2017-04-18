import Ember from 'ember';
import validator from './validator';

export default Ember.Controller.extend({
  formValues: {},

  validator,
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
