import {
  validatePresence,
} from 'ember-changeset-validations/validators';

export default {
  item: [
    validatePresence(true),
  ],
  category: [
    validatePresence(true),
  ],
};
