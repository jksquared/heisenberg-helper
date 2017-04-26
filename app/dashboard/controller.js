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
      this.get('session').invalidate();
    },

    deleteAfterConfirm(item) {
      if (confirm('Are you sure you want to delete this item? All times associated with this item will be deleted as well.')) {
        item.destroyRecord();
      }
    },

    // showModal(targetId) {
    //   const modal = Ember.Views.views[targetId];
    //   modal.send('toggleModal');
    // },

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
