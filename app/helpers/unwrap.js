import Ember from 'ember';

export function unwrap([arr]/* , hash*/) {
  return arr.map(x => x.toJSON());
}

export default Ember.Helper.helper(unwrap);
