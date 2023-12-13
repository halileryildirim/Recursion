function fibsRecs(n) {
  if (n == 1) {
    return [0];
  } else if (n == 2) {
    return [0, 1];
  } else
    return [
      ...fibsRecs(n - 1),
      fibsRecs(n - 1)[n - 2] + fibsRecs(n - 1)[n - 3],
    ];
}

console.log(fibsRecs(1));
console.log(fibsRecs(2));
console.log(fibsRecs(3));
console.log(fibsRecs(4));
console.log(fibsRecs(10));
