function sumNumbersWhileLoop(array) {
  let i = 0;
  let res = 0;
  while (i <= array.length - 1) {
    res += array[i];
    i++;
  }
  console.log(res);
  return res;
  //your code
}

function sumNumbersForLoop(array) {
  let res = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    res += array[i];
  }
  console.log(res);
  return res;
  //your code
}

// Do not remove or change this line, or the tests won't work
export { sumNumbersWhileLoop, sumNumbersForLoop };
