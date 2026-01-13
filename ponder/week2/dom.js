let title = document.querySelector('h1');
console.log(title);

title.textContent = 'web page components';

let topic_title = document.getElementById('topics');


topic_title.style.color = 'purple'


let list = document.querySelector('.list');

list.style.border = '3px dotted black'

let para = document.querySelector('p');

para.classList.add('background');

const image = document.querySelector('#logo');

//para.style.backgroundColor = ('black')

//image.setAttribute('src', 'images/logo.png');

//image.src = 'images/logo.png';

let selectElem = document.getElementById('webdevlist');


selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;

    if (codeValue === "html") {
        document.body.style.backgroundColor = "red";
    } else if (codeValue === "css") {
        document.body.style.backgroundColor = "blue";
    } else if (codeValue === "js") {
        document.body.style.backgroundColor = "yellow";
    }
});

                

const newPara = document.createElement('p');
newPara.innerText = "Added with Javascript" ; 

document.body.appendChild(newPara);
