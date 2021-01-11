function concat(x, y) {
  for (let i = 0; i < y.length; i++ ) {
    x.push(y[i])
  }
  return x;
}

console.log(concat([1, 2, 3], [4, 5, 6]));