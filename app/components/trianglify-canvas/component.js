import Ember from 'ember';
import Trianglify from 'npm:trianglify';

export default Ember.Component.extend({
  classNames: ['canvas'],
  didInsertElement() {
    this._super(...arguments);

    const pattern = Trianglify({
      height: 1000,
      width: 2000,
      cell_size: 250,
      seed: '2qc5n',
      variance: '0.97',
      x_colors: ['#2a454b', '#405952',  '#FF974F', '#9C9B7A', '#d22d2d', '#F54F29', '#902d16'],


    });

    this.element.appendChild(pattern.svg());
  }
});
