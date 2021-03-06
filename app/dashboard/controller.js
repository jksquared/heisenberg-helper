import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  formValues: {
    time: '',
  },

  unwrappedModel: Ember.computed('model.@each.totalTime', function () {
    return this.model.map(x => x.toJSON());
  }),

  actions: {
    invalidateSession() {
      if (confirm('Are you sure you want to log out?')) {
        this.get('session').invalidate();
      }
    },

    deleteItem(item) {
      if (confirm('Are you sure you want to delete this item? All times associated with this item will be deleted as well.')) {
        item.destroyRecord();
      }
    },

    // deleteItem(item) {
    //   item.destroyRecord();
    // },

    async deleteTime(time) {
      const item = await time.get('item');

      await time.destroyRecord();

      item.reload();
    },

    addTime() {
      const time = this.store.createRecord('time', this.formValues);

      // this.model is the model from 'project/detail'
      time.set('item', this.model);

      return time.save().then(() => {
        this.set('formValues', {});
        this.transitionToRoute('dashboard');
      });
    },
  },
});
