import Ember from 'ember';
import Trianglify from 'npm:trianglify';

export default Ember.Component.extend({
  classNames: ['canvas'],
  didInsertElement() {
    this._super(...arguments);

    const pattern = Trianglify({
      height: this.element.scrollHeight,
      width: this.element.scrollWidth,
      cell_size: 250,
      seed: '2qc5n',
      variance: '0.97',
      x_colors: ['#2a454b', '#649688', '#405952', '#9C9B7A', '#FF974F', '#F54F29', '#902d16', '#2a454b', '#d22d2d'],
      // x_colors: ['#649688', '#FF974F', '#F54F29', '#902d16', '#2a454b', '#d22d2d'],


    });

    this.element.appendChild(pattern.svg());
  }
});
