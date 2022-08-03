const { findAverage } = require('./average');

describe('findAverage', () => {
  test('Average of [1, 3, 4, 9, 13] is 6', () => {
    expect(findAverage([1, 3, 4, 9, 13])).toEqual(6);
  });

  test('Average of [1, 3, 9, 10, 17, 18, 4, 11, 8] is 9', () => {
    expect(findAverage([1, 3, 9, 10, 17, 18, 4, 11, 8])).toEqual(9);
  });
});
