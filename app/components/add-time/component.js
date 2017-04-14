import Ember from 'ember';

export default Ember.Component.extend({
  // store: Ember.inject.service(),
  tagName: '',
  type: 'text',
  formValues: {
    time: '',
  },

  model() {
    return {};
  },

  actions: {
    addTime() {
      const time = this.store.createRecord('time', this.formValues);

      time.set('item', this.model);

      return time.save().then(() => {
        this.set('formValues', {});
        this.transitionToRoute('dashboard');
      });
    },
  },
});
