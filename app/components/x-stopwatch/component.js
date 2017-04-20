import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({

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
      // this.set('duration', this.get('startTime').diff(moment()));
    },

    pause() {
      // this.set('lapTime', this.get('timeElapsed'));
      // this.set('state', 'lap');
    },

    resume() {

    },

    save() {
      const durr = this.get('startTime').diff(moment());

      // Create a new duration model and save
      const time = this.store.createRecord('duration', this.durr);

      time.set('item', this.model);

      return time.save().then(() => {
        this.transitionToRoute('dashboard');
      });
    },
  },
});
