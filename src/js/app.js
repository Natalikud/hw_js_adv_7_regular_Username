export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    return /^([a-z])((\d{1,3})(?!\d)|[-_]|[a-z])*([a-z])$/gi.test(this.name);
  }
}
