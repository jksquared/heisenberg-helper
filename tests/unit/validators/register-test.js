import { module, test } from 'qunit';
import validateRegister from 'heisenberg-helper/validators/register';

module('Unit | Validator | register');

test('it exists', function(assert) {
  assert.ok(validateRegister());
});
