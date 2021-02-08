function calculateMatrixSum(matrix) {
  let result = 0;

  for (let i = 0; i < matrix.length; i++) {
    const inner = matrix[i];

    for (let j = 0; j < inner.length; j++) {
      result += inner[j];
    }
    //your code
  }
  return result;
}
// Do not remove or change this line, or the tests won't work
export { calculateMatrixSum };
