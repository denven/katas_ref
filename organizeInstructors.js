const organizeInstructors = function(instructors) {
  // Put your solution here
  const courseObj = {};
  for (const key of instructors) {
    //console.log(key);
    let courseName = key["course"];
    let instructorName = key["name"];
    if (courseObj[courseName] === undefined) {
      courseObj[courseName] = [instructorName];
    } else {
      courseObj[courseName].push(instructorName);
    }
  }
  return courseObj;
};

console.log(organizeInstructors([{
  name: "Samuel",
  course: "iOS"
},
{
  name: "Victoria",
  course: "Web"
},
{
  name: "Karim",
  course: "Web"
},
{
  name: "Donald",
  course: "Web"
}
]));

console.log(organizeInstructors([{
  name: "Brendan",
  course: "Blockchain"
},
{
  name: "David",
  course: "Web"
},
{
  name: "Martha",
  course: "iOS"
},
{
  name: "Carlos",
  course: "Web"
}
]));