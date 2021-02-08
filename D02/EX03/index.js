function calculateMatrixColumnSum(matrix, columnIndex) {
  let result = 0;

  for (let i = 0; i < matrix.length; i++) {
    const inner = matrix[i];

    result += inner[columnIndex];
  }
  return result;
}

//your code

// Do not remove or change this line, or the tests won't work
export { calculateMatrixColumnSum };
