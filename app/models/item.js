import DS from 'ember-data';

export default DS.Model.extend({
  item: DS.attr('string'),
  category: DS.attr('string'),
  totalTime: DS.attr('number'),
  durations: DS.hasMany('duration')
});
