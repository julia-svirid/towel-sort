
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0) return [];
  let arr = [];
  for (let i = 0; i < matrix.length; i += 1) {
      if (i % 2 === 0) {
          arr.push(matrix[i]);
      }
      else {
          arr.push(matrix[i].sort((a,b) => b - a));
      }
  }
  const res = arr.reduce((acc, val) => acc.concat(val), []); 
  return res;
}
