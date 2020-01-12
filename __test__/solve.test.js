const { solve } = require('../Solve');

describe('Solve function testing', () => {
  it('Should be "" if value not is divisible by 2 or 3', () => {
    expect(solve(1)).toEqual('');
    expect(solve(7)).toEqual('');
    expect(solve(11)).toEqual('');
  });

  it('Should be "fizz" if value is divisible by 2 but not 3', () => {
    expect(solve(2)).toEqual('fizz');
    expect(solve(4)).toEqual('fizz');
    expect(solve(8)).toEqual('fizz');
  });

  it('Should be "buzz" if value is divisible by 3 but not 2', () => {
    expect(solve(3)).toEqual('buzz');
    expect(solve(9)).toEqual('buzz');
    expect(solve(15)).toEqual('buzz');
  });

  it('Should be "fizz buzz" if value is divisible by 2 and 3', () => {
    expect(solve(6)).toEqual('fizz buzz');
    expect(solve(12)).toEqual('fizz buzz');
    expect(solve(18)).toEqual('fizz buzz');
  });
});
