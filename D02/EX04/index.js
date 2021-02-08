function calculateMatrixDiagonalSum(matrix) {
  let res = 0;

  for (let i = 0; i < matrix.length; i++) {
    const inner = matrix[i];

    res += matrix[i][i];
  }
  return res;
}
// Do not remove or change this line, or the tests won't work
export { calculateMatrixDiagonalSum };
