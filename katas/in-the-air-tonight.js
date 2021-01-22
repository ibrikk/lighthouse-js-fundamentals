const checkAir = function (samples, threshold) {
  let countOfDirty = 0; // Count of dirty samples
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === 'dirty') {
      countOfDirty++;
    }
  } if (threshold < countOfDirty / 10) {
    return 'Polluted';
  } else if (threshold > countOfDirty / 10) {
    return 'Clean';
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))