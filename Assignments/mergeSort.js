function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  } else {
    const middle = Math.floor(array.length / 2);
    const leftArray = mergeSort(array.splice(0, middle));
    const rightArray = mergeSort(array.splice(middle));
    return merge(leftArray, rightArray);
  }
}

function merge(leftArray, rightArray) {
  //sol sağ array sıralı olacak. sol 1 ile sağ 1 kıyasla. küçük olanı ortağa aktarıp arrayden sil. küçük olan arrayde indexi arttır. bunu döngüye sok
  const mergedArray = [];
  do {
    if (leftArray == []) {
      mergedArray.push(rightArray.pop());
    } else if (rightArray == []) {
      mergedArray.push(leftArray.pop());
    } else if (leftArray[0] <= rightArray[0]) {
      mergedArray.push(leftArray.pop());
    } else if (leftArray[0] > rightArray[0]) {
      mergedArray.push(rightArray.pop());
    }
  } while (leftArray != [] && rightArray != []);
  return mergedArray;
}

console.log(mergeSort([0, 1, 1, 2, 3, 5, 8, 13]));
