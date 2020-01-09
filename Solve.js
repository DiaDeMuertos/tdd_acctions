const solve = v => {
  if (v % 2 === 0 && v % 3 === 0) {
    return 'fizz buzz';
  } else if (v % 2 === 0 && v % 3 !== 0) {
    return 'fizz';
  } else if (v % 3 === 0 && v % 2 !== 0) {
    return 'buzz';
  } else if (v % 2 !== 0 || v % 3 !== 0) {
    return '';
  }

  return null;
};

module.exports = {
  solve,
};
