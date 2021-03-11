
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const compareNumeric = (a,b) => a - b;

  const compareNumeric_1 = (a,b) => b - a;

  const newArr = [];
  if (!matrix) {
    return newArr;
  }
  matrix.forEach(function (item, i) {
    if (i % 2 === 0) {
     matrix[i].sort(compareNumeric);
    } else {
      matrix[i].sort(compareNumeric_1)
    }
  })

  for (let i = 0; i < matrix.length; i++) {
    matrix[i].forEach(function (item, i) {
      newArr.push(item);
    })
  }
  return newArr;
}
