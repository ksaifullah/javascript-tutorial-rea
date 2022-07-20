const { fibonacci } = require('./fibonacci');

test('fibonacci for 5', () => {
  expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
});
