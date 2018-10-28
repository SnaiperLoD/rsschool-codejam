const sumOfOther = (arr) => {
  let sum = arr.reduce((acc, item) => acc + item);
  return arr.map(item => sum - item);
};