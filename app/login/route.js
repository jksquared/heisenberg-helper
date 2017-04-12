import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      id: '',
      firstName: '',
      lastName: ''
    }];
  }
});
