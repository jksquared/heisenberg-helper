import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},
  // isShowingModal: false,


  actions: {
    addItem(changeset) {
      changeset.save();
      const item = this.store.createRecord('item', this.model);

      item.save();

      this.transitionToRoute('dashboard');
      // transitionToRoute needs to be changed to wait for the add item button to be clicked.
      // This is activating the closeOutlet function.
    },

    toggleModal() {
      this.transitionToRoute('dashboard');
    },
  }
});
