import Ember from 'ember';
import validator from '../validators/login';
// I think loginUser is failing b/c this is the wrong file path

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  validator,
  actions: {
    async loginUser(changeset) {
      await changeset.validate();

      if (changeset.get('isInvalid')) {
        return alert('Make better decisions with this form');
      }

      await changeset.save();

      this.transitionToRoute('dashboard');

      // try {
      //   await this.get('session').authenticate('authenticator:token', {
      //     identification: this.get('model.email'),
      //     password: this.get('model.password'),
      //   });
      // } catch (err) {
      //   this.set('errorMessage', err.error.message);
      // }
    },
  },
});
