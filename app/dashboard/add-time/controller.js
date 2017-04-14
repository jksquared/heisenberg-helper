import Ember from 'ember';

export default Ember.Controller.extend({
  tagName: '',

  actions: {
    addTime(changeset) {
      changeset.save();
      const time = this.store.createRecord('duration', this.formValues);

      time.set('item', this.model);

      return time.save().then(() => {
        this.transitionToRoute('dashboard');
      });
    },
  },
});
