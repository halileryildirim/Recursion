//fibs function with iteration
function fibs(n) {
  if (n > 0) {
    const array = [0, 1];
    for (let i = 2; i < n; i++) {
      array[i] = array[i - 1] + array[i - 2];
    }
    return array;
  }
}

console.log(fibs(8));
console.log(fibs(7));
