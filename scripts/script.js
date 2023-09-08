const unsortedArray = [
  1, 3, 4, -3, -2, -123, -3, 7, 15, 17, 465, 4334, 0, 66, 43, 665,
];

const bubbleSort = (arr) => {
  for (let i = 0, endI = arr.length - 1; i < endI; i++) {
    let wasSwap = false;

    for (let j = 0, endJ = endI - i; j < endJ; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        wasSwap = true;
      }
    }
    if (!wasSwap) break;
  }
  return arr;
};

const selectionSort = (arr) => {
  for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
    let indexMin = i;

    for (let j = i + 1; j < l; j++) {
      if (arr[indexMin] > arr[j]) {
        indexMin = j;
      }
    }
    if (indexMin !== i) {
      [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
    }
  }
  return arr;
};

const insertionSort = (arr) => {
  for (let i = 1, l = arr.length; i < l; i++) {
    const current = arr[i];
    let j = i;

    while (j > 0 && arr[j - 1] > current) {
      arr[j] = arr[j - l];
      j--;
    }
    arr[j] = current;
  }
  return arr;
};

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

const mergeSort = (arr) => {
  if (!arr || !arr.length) {
    return null;
  }
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const arrLeft = arr.slice(0, middle);
  const arrRight = arr.slice(middle);
  return merge(mergeSort(arrLeft), mergeSort(arrRight));
};

const merge = (arrFirst, arrSecond) => {
  const arrSort = [];
  let i = (j = 0);

  while (i < arrFirst.length && j < arrSecond.length) {
    arrSort.push(arrFirst[i] < arrSecond[j] ? arrFirst[i++] : arrSecond[j++]);
  }
  return [...arrSort, ...arrFirst.slice(i), ...arrSecond.slice(j)];
};

alert(bubbleSort(unsortedArray));
alert(selectionSort(unsortedArray));
alert(insertionSort(unsortedArray));
alert(quickSort(unsortedArray));
alert(mergeSort(unsortedArray));
