// Write a function that takes a number n, where n > 1, and returns a sequence of fibonacci numbers.
// Input: 5, Output: [0, 1, 1, 2, 3]
const fibonacci = (n) => {
  const seq = [0, 1];
  for(let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq;
};

module.exports = {
  fibonacci,
};
