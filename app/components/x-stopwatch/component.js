// import Ember from 'ember';
// import moment from 'moment';
//
// export default Ember.Component.extend({
//
//   startTime: null,
//   duration: null,
//
//   actions: {
//     start() {
//       this.set('startTime', moment());
//     },
//
//     stop() {
//       this.set('duration', this.get('startTime').diff(moment()));
//     },
//
//     reset() {
//     },
//
//     pause() {
//       // this.set('lapTime', this.get('timeElapsed'));
//       // this.set('state', 'lap');
//     },
//
//     resume() {
//     },
//
//     async save() {
//       const item = this.model;
//       const duration = this.set('duration', this.get('startTime').diff(moment()));
//
//       // Create a new duration model and save
//       const time = this.store.createRecord('duration', duration);
//
//       time.set('item', item);
//
//       await time.save().then(() => {
//         this.transitionToRoute('dashboard');
//       });
//     },
//   },
// });
