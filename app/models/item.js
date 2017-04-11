import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr('number'),
  item: DS.attr('string'),
  category: DS.attr('string'),
});
