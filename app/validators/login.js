import {
  validatePresence,
  validateFormat
} from 'ember-changeset-validations/validators';


export default {
  password: validatePresence(true),
  email: [
    validatePresence(true),
    validateFormat({ type: 'email' }),
  ],
};
