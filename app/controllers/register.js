import Ember from 'ember';
import validator from './validator';

export default Ember.Controller.extend({
  validator,
  formValues: {},
  actions: {
    async registerUser(changeset) {
      await changeset.validate();

      if (changeset.get('isInvalid')) {
        return alert('Please fill in the input fields');
      }

      await changeset.save();

      const user = this.store.createRecord('user', this.model);

      await user.save();

      this.transitionToRoute('login');
    },
  },
});
