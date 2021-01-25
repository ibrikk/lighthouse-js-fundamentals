const camelCase = (str) => {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      res.push(str[++i].toUpperCase());
    } else {
      res.push(str[i]);
    }
  }
  return res.join('');
};


console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));