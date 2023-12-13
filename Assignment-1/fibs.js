//fibs function with iteration
function fibs(n) {
  if (n > 0) {
    const array = [0];
    for (let i = 1; i < n; i) {
      if (i == 1) {
        array[i] = 1;
        i++;
      } else {
        array[i] = array[i - 1] + array[i - 2];
        i++;
      }
    }
    return array;
  }
}

console.log(fibs(8));
console.log(fibs(7));
