const unsortedArray = [
  1, 3, 4, -3, -2, -123, -3, 7, 15, 17, 465, 4334, 0, 66, 43, 665,
];

const bubbleSort = (arr) => {
  for (let i = 0, endI = arr.length - 1; i < endI; i++) {
    let wasSwap = false;

    for (let j = 0, endJ = endI - 1; j < endJ; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        wasSwap = true;
      }
    }
    if (!wasSwap) break;
  }
  return arr;
};
