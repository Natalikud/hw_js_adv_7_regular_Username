import Validator from '../app';

test('testing Validator', () => {
  const name = 'Natali-kud777k';
  const user1 = new Validator(name);
  expect(user1.validateUsername()).toBe(true);
});
