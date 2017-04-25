import Ember from 'ember';
import Trianglify from 'npm:trianglify';
import EQ from 'npm:css-element-queries';
const { ResizeSensor } = EQ;

export default Ember.Component.extend({
  classNames: ['canvas'],

  showTriangles() {
    const pattern = Trianglify({
      height: this.element.scrollHeight,
      width: this.element.scrollWidth,
      cell_size: 250,
      seed: '2qc5n',
      variance: '0.97',
      x_colors: ['#2a454b', '#649688', '#405952', '#9C9B7A', '#FF974F', '#F54F29', '#902d16', '#2a454b', '#d22d2d'],
    });

    const svg = this.$('svg');

    if (svg.length) {
      svg.remove();
    }

    this.element.appendChild(pattern.svg());
  },

  didInsertElement() {
    this._super(...arguments);

    const r = new ResizeSensor(this.element, () => {
      this.showTriangles();
    });

    this.showTriangles();
  }
});
