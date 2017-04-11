import DS from 'ember-data';

export default DS.Model.extend({
  time: DS.attr('number'),
  item: DS.belongsTo('item'),
});
