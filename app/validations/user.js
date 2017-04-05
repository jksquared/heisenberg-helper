import {
  validatePresence,
  validateLength,
  validateConfirmation,
  validateFormat
} from 'ember-changeset-validations/validators';

export default {
  email: [
    validatePresence(true),
    validateFormat({ type: 'email' }),
  ],
  password: [
    validatePresence(true),
    validateLength({ min: 6 }),
  ],
  passwordConfirmation: [
    validateConfirmation({ on: 'password' }),
  ],
};
