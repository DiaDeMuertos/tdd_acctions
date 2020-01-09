const { sum } = require('../Sum');

describe('Addition of Two Number functionality test', () => {
  it('Add 1 + 2 should be 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('Add 1 + 2 should be number', () => {
    expect(sum(1, 2)).toEqual(expect.any(Number));
  });

  it('Should fail if are not numbers', () => {
    expect(sum('1', 2)).toEqual(Error('Expecting number type as parameter'));
    expect(sum(1, '2')).toEqual(Error('Expecting number type as parameter'));
    expect(sum('1', '2')).toEqual(Error('Expecting number type as parameter'));
  });
});
