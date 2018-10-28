const sumOfOther = (arr) => {
  let sum = array.reduce((acc, item) => acc + item);
  return arr.map(item => sum - item);
};
sumOfOther();