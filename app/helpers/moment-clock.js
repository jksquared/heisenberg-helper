import Ember from 'ember';
import moment from 'moment';
import format from 'npm:format-duration';

const { Helper, run } = Ember;

export default Helper.extend({
  compute([start], { interval }) {
    if (interval) {
      run.later('render', () => {
        this.recompute();
      }, interval);
    }

    const diff = moment().diff(start);
    const durr = moment.duration(diff);

    return format(diff);
  },

  clearTimer() {
    clearTimeout(this.intervalTimer);
  },
});
