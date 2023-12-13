function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }
}

function merge(left, right) {
  const mergedArr = [];
  while (left.length != 0 && right.length != 0) {
    if (left[0] < right[0]) {
      mergedArr.push(left.shift());
    } else {
      mergedArr.push(right.shift());
    }
  }

  return [...mergedArr, ...left, ...right];
}

console.log(mergeSort([3, 1, 8, 0, 3, 12, 16, -3]));
