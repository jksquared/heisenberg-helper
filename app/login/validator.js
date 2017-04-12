import {
  validatePresence,
  validateFormat,
  validateLength,
} from 'ember-changeset-validations/validators';


export default {
  password: [
    validatePresence(true),
    validateLength({ min: 6 })
  ],
  email: [
    validatePresence(true),
    validateFormat({ type: 'email' }),
  ],
};
