let pets = ['goldfish', 'dog', 'rhino'];

console.log(pets.length);

pets[3] = 'bunny';

console.log(pets);

pets.push('length');

console.log(pets);

const steps = ['one', 'two', 'three'];

steps.forEach(function(item){
    console.log(item);
})
steps.forEach(showsteps);

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

let grades = ['A', 'B', 'D'];
let points;
let gpapoints = grades.map(convert);

function convert(grade){
    switch (grade.toUpperCase()){
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
console.log(grades);

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


// function convert(grade) {
//     switch (grade){
//         case 'A':
//             points = 4;
//             break;
//         case 'B':
//             points = 3;
//             break;
//         case 'C':
//             points = 2;
//             break;
//         case 'D':
//             points = 1;
//             break;
//         case 'F':
//             points = 0;
//             break;
//         default:
//             alert('not a valid grade');
//     }
//     return points;
// }
          

// const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
          

// const students = [
//     {last: 'Andrus', first: 'Aaron'},
//     {last: 'Masa', first:'Manny'},
//     {last: 'Tanda', first: 'Tamanda'}
// ];
          

// let pets = ['goldfish', 'dog', 'rhino'];
// let scores = newArry(5, 6, 7);