function range(start, end, step) {
  let newArr = [];

  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return [];
  } else {
    let i = start; while (i <= end) {
      newArr.push([i]);
      i += step;
    }
  }
  return newArr;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));