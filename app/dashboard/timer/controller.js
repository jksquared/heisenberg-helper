import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  startTime: null,
  duration: null,

  actions: {
    start() {
      this.set('startTime', moment());
    },

    stop() {
      this.set('duration', this.get('startTime').diff(moment()));
    },

    reset() {
      this.set('duration', this.set('startTime'), moment());
    },

    pause() {
      this.set('duration', this.get('startTime').diff(moment()));
    },

    resume() {
      this.set('duration', this.set('startTime').diff(moment()));
    },

    async save() {
      const item = this.model;
      const durr = this.set('duration', this.get('startTime').diff(moment()));
      // const duration = durr.duration().asMinutes();

      // Create a new duration model and save
      const time = this.store.createRecord('duration', durr);

      time.set('item', item);

      await time.save().then(() => {
        this.transitionToRoute('dashboard');
      });
    },
  },
});
