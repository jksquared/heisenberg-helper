import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editItem(changeset) {
      changeset.save().then(() => {
        this.transitionToRoute('dashboard');
      });
    }
  }
});
