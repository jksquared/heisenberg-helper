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
      // const resume = this.set('duration', this.set('startTime').diff(moment()));
      // this.set('startTime', resume);
    },

    async save() {
      // changeset.save();
      const item = this.model;
      const durr = this.set('duration', parseInt((-(this.get('startTime').diff(moment()))) / 60000));

      // Create a new duration model and save
      const time = this.store.createRecord('duration', durr);


      await time.set('item', item);

      await time.save().then(() => {
        this.transitionToRoute('dashboard');
      });
    },
  },
});
