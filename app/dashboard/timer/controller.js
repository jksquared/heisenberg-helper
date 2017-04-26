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

    save() {
      const dur = this.set('duration', parseInt((-(this.get('startTime').diff(moment()))) / 60000));

      // Create a new duration model and save
      const time = this.store.createRecord('duration', {
        time: dur
      });


      time.set('item', this.model);

      time.save().then(() => {
        this.transitionToRoute('dashboard');
      });
    },

    reset() {
      this.set('duration', this.set('startTime'), moment());
    },

    pause() {
      this.set('duration', this.get('startTime').diff(moment()));
    },

    resume() {
      this.set(-(this.get('startTime').diff(moment())), moment());
    },

  },
});
