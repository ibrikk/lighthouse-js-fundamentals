function judgeVegetable(vegetables, metric) {

  if (metric === 'redness') {

    let sortedArray = vegetables.sort((a, b) => b.redness - a.redness)

    return sortedArray[0].submitter;

  } else if (metric === 'plumpness') {

    let sortedArray2 = vegetables.sort((a, b) => b.plumpness - a.plumpness)

    return sortedArray2[0].submitter

  } else {

    return undefined;

  }

}


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'redness'
console.log(judgeVegetable(vegetables, metric));
