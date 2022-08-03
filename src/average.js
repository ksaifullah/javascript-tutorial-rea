const findAverage = (numArr) => {
  return numArr.reduce((total, currentValue) => {
    return total + currentValue;
  }, 0) / numArr.length;
};

module.exports = {
  findAverage,
};
