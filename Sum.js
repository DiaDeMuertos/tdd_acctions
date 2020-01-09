const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return Error('Expecting number type as parameter');
  }
  return a + b;
};

module.exports = { sum };
