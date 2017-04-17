import Ember from 'ember';
import _ from 'lodash/lodash';

const generateData = function () {
  return _.range(_.random(3, 8)).map((k, idx) => ({
    name: `${idx + 1}`,
    sites: _.random(1, 10000)
  }));
};

export default Ember.Component.extend({
  setupController(controller) {
    this._super(...arguments);

    controller.set('pieData', generateData());
  },

  init() {
    this.set('pieData', generateData());
  },

  actions: {
    toggleData() {
      this.set('pieData', generateData());
    }
  }
});
