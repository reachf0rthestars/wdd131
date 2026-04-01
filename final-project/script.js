const timerinput = document.querySelector('.minutes-input');
const startbtn = document.querySelector('.startbtn');
const pausebtn = document.querySelector('.pausebtn');

let countdown = null;
let endTime = null;
let originalseconds = 0;

function parsetime(num) {
  return Number(num) * 60; // minutes → seconds
}

function formattime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

startbtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (countdown) return;

  originalseconds = parsetime(timerinput.value);
  timerinput.value = formattime(originalseconds);
  endTime = Date.now() + originalseconds * 1000;

  countdown = setInterval(() => {
    const remaining = Math.floor((endTime - Date.now()) / 1000);

    timerinput.value = formattime(remaining);

    if (remaining <= 0) {
      clearInterval(countdown);
      countdown = null;
      timerinput.value = "00:00";
    }
  }, 1000);
});
timerinput.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    startbtn.click(); // simulate pressing Start
  }
});
pausebtn.addEventListener('click', (e) => {
  e.preventDefault();
  clearInterval(countdown);
  countdown = null;

  const remaining = Math.floor((endTime - Date.now()) / 1000);
  timerinput.value = formattime(remaining);
});



const newtask = document.querySelector('.task-form');
const taskbtn = document.querySelector('.taskbtn');
const tasklist = document.querySelector('.task-list');
function createtask(str){
  const html = `<li>
          <span>${str}</span>
          <button class="remove-task">✕</button>
        </li>`
  return html
}

taskbtn.addEventListener('click', (e) => {
  e.preventDefault();
  let text = newtask.querySelector('input').value
  tasklist.insertAdjacentHTML('beforeend', createtask(text));
})
tasklist.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-task')) {
    e.target.closest('li').remove();
  }
});