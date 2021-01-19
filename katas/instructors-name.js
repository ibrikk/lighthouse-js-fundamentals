// Create a function named instructorWithLongestName that will receive an array of instructor objects,
 // and return the object that has the longest name.If there are two instructors with the longest name, 
 // return the first one.

const instructorWithLongestName = function (instructors) {
  let obj = {name: ''};
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > obj.name.length) {
      obj = instructors[i];
    }
  }
  return obj;
};

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));
console.log(instructorWithLongestName([
  {name: "Nijat", course: "ios"},
  {name: "ABCDE", course: "web"}
])); // instructos[i].name.length is equal