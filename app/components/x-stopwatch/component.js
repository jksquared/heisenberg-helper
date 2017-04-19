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
      // this.set('state', 'reset');
      // this.set('timeElapsed', 0);
    },

    pause() {
      // this.set('lapTime', this.get('timeElapsed'));
      // this.set('state', 'lap');
    },

    resume() {
      // this.set('state', 'run');
    },

    save() {
      const ms = this.get('duration');

      // convert from ms to mins (maybe moment will help)

      // Create a new duration model and save

      // time.set('item', this.model);
      //
      // return time.save().then(() => {
      //   this.transitionToRoute('dashboard');
      // });
    },
  },
});
