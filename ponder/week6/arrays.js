const steps = ['one', 'two', 'three'];

steps.forEach(function(item){
    console.log(item);
})

function showsteps(step){
    console.log(step);
}


//.map also calls a funciton but creates a new array from the orgional array
let mylist = document.querySelector('#mylist');

const stepshtml = steps.map(listtemplate);
function listtemplate(item){
    return `<li>${item}</li>`
}
mylist.innerHTML = stepshtml.join("");

//.map

let grades = ['B', 'B', 'D'];
let points;
let gpapoints = grades.map(convert);

function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}
          
console.log(gpapoints);


//.reduce - reduce down to a singualar value with accumulater
let totalpoints = gpapoints.reduce(gettotal);

function gettotal(sum, item){
    return sum + item;
}

console.log(totalpoints);
let gpaaverage = totalpoints/gpapoints.length;

console.log(gpaaverage)

//.filter make a new array but only items that pass a certain condition.
const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const shortwords = words.filter(function(word) {
    return word.length < 6;
});

console.log(shortwords)


// students data
const students = [
  { last: 'Andrus', first: 'Aaron' },
  { last: 'Masa',  first: 'Manny' },
  { last: 'Tanda', first: 'Tamanda' }
];

const indexTanda = students.findIndex(s => s.last === 'Tanda');
console.log(indexTanda); // prints 2

const studentsTable = document.getElementById('studentsTable');
if (studentsTable) {
  studentsTable.innerHTML = students
    .map(s => `<tr><td>${s.first}</td><td>${s.last}</td></tr>`)
    .join('');
}