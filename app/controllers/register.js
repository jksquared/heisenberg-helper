import Ember from 'ember';
import validator from './validator';

export default Ember.Controller.extend({
  validator,
  actions: {
    async saveUser(changeset) {
      await changeset.validate();

      if (changeset.get('isInvalid')) {
        return alert('Make better decisions with this form');
      }

      await changeset.save();

      const user = this.store.createRecord('user', this.model);

      await user.save();

      this.transitionToRoute('login');
    },
  },
});
