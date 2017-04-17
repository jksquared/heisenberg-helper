import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('trianglify-canvas', 'Integration | Component | trianglify canvas', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{trianglify-canvas}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#trianglify-canvas}}
      template block text
    {{/trianglify-canvas}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
