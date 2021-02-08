function calculateSumRecursion(array) {
  if (array.length === 0) {
    return 0; //your code
  } else {
    return array[0] + calculateSumRecursion(array.slice(1));
  }
}
// Do not remove or change this line, or the tests won't work
export { calculateSumRecursion };
