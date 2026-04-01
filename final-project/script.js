// const timerinput = document.querySelector('.timer-form input');
// const startbtn = document.querySelector('.startbtn');
// const pausebtn = document.querySelector('.pausebtn');

// let countdown = null;
// let endTime = null;
// let originalseconds = 0;

// function parsetime(num) {
//   return Number(num) * 60; // minutes → seconds
// }

// function formattime(seconds) {
//   const m = Math.floor(seconds / 60);
//   const s = seconds % 60;
//   return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
// }

// startbtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   if (countdown) return;

//   originalseconds = parsetime(timerinput.value);
//   timerinput.value = formattime(originalseconds);
//   endTime = Date.now() + originalseconds * 1000;

//   countdown = setInterval(() => {
//     const remaining = Math.floor((endTime - Date.now()) / 1000);

//     timerinput.value = formattime(remaining);

//     if (remaining <= 0) {
//       clearInterval(countdown);
//       countdown = null;
//       timerinput.value = "00:00";
//     }
//   }, 1000);
// });

// pausebtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   clearInterval(countdown);
//   countdown = null;

//   const remaining = Math.floor((endTime - Date.now()) / 1000);
//   timerinput.value = formattime(remaining);
// });
// timerinput.addEventListener('keydown', (e) => {
//   if (e.key === "Enter") {
//     e.preventDefault();
//     startbtn.click(); // simulate pressing Start
//   }
// });

let tasks = [];

const taskform = document.querySelector('.task-form');
const taskinput = taskform ? taskform.querySelector('input[type="text"]') : null;
const tasklist = document.querySelector('.task-list');

function escapehtml(str) {
  return String(str).replace(/[&<>"']/g, function (m) {
    return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]);
  });
}

function nowseconds() {
  return Math.floor(Date.now() / 1000);
}

function formatseconds(sec) {
  sec = Math.max(0, Math.floor(sec));
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
}

//list nussiances
function savetasks(){
  try{
    localStorage.setItem('pt_tasks', JSON.stringify(tasks));
  
  }catch(e){

  }
}
function loadtasks(){
  try{
    const raw = localStorage.getItem('pt_tasks');
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) tasks = parsed;

  } catch(e){
    tasks = [];
  }
}
function rendertasks(){
  if (!tasklist) return;
  tasklist.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.dataset.id = task.id;
    li.className = task.completed ? 'task-completed' : '';
    li.innerHTML = `
      <label class="task-row">
        <input type="checkbox" class="toggle-complete" ${task.completed ? 'checked' : ''} aria-label="mark ${escapehtml(task.text)} as completed">
        <span class="task-text">${escapehtml(task.text)}</span>
      </label>
      <div class="task-actions">
        <button class="remove-task" aria-label="remove ${escapehtml(task.text)}">✕</button>
      </div>
    `;
    tasklist.appendChild(li);
  });
}
function addtask(text) {
  const t = String(text || '').trim();
  if (!t) return;
  const task = { id: Date.now().toString(), text: t, completed: false };
  tasks.push(task);
  savetasks();
  rendertasks();
}
function removetask(id) {
  tasks = tasks.filter(t => t.id !== id);
  savetasks();
  rendertasks();
}
function toggletaskcompleted(id) {
  tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
  savetasks();
  rendertasks();
}
function edittask(id, newtext) {
  const t = String(newtext || '').trim();
  if (!t) return;
  tasks = tasks.map(item => item.id === id ? { ...item, text: t } : item);
  savetasks();
  rendertasks();
}
if (taskform && taskinput) {
  taskform.addEventListener('submit', function (e) {
    e.preventDefault();
    addtask(taskinput.value);
    taskinput.value = '';
    taskinput.focus();
  });
}
if (tasklist) {
  tasklist.addEventListener('click', function (e) {
    if (e.target.classList.contains('remove-task')) {
      const li = e.target.closest('li');
      if (!li) return;
      removetask(li.dataset.id);
      return;
    }
    if (e.target.classList.contains('toggle-complete')) {
      const li = e.target.closest('li');
      if (!li) return;
      toggletaskcompleted(li.dataset.id);
      return;
    }
  });
 tasklist.addEventListener('dblclick', function (e) {
    const span = e.target.closest('.task-text');
    if (!span) return;
    const li = span.closest('li');
    const id = li.dataset.id;
    const current = tasks.find(t => t.id === id);
    if (!current) return;
    const newtext = prompt('edit task', current.text);
    if (newtext !== null) edittask(id, newtext);
  });
}
 


// timer stuff the nuscance and bane of my existence!!!

const timerform = document.querySelector('.timer-form');
const timerinput = timerform ? timerform.querySelector('input[type="text"]') : null;
const startbtn = document.querySelector('.startbtn');
const pausebtn = document.querySelector('.pausebtn');
const announcer = document.getElementById('timer-announcer') || null;

let countdown = null;
let countdownend = null;
function mintosec(val) {
  if (!Number.isFinite(n) || n <= 0) {
    alert("Please enter a valid number of minutes.");
    return 0;
  }
  const s = String(val || '').trim();
  // mm:ss
  if (s.includes(':')) {
    const parts = s.split(':').map(p => Number(p));
    if (parts.length === 2 && Number.isFinite(parts[0]) && Number.isFinite(parts[1])) {
      return Math.max(0, Math.floor(parts[0]) * 60 + Math.floor(parts[1]));
    }
  }
  const n = Number(s);
  return Number.isFinite(n) && n > 0 ? Math.floor(n * 60) : 0;
}

function cleartimer() {
  if (countdown) {
    clearInterval(countdown);
    countdown = null;
    countdownend = null;
  }
}

function starttimerfromseconds(seconds) {
  if (!timerinput) return;
  if (countdown) return; 
  if (!seconds || seconds <= 0) return;
  const start = nowseconds();
  countdownend = start + seconds;
  timerinput.value = formatseconds(seconds);
  if (announcer) announcer.textContent = 'timer started ' + formatseconds(seconds);
  countdown = setInterval(function () {
    const left = Math.max(0, countdownend - nowseconds());
    timerinput.value = formatseconds(left);
    if (announcer) announcer.textContent = 'time remaining ' + formatseconds(left);
    if (left <= 0) {
      cleartimer();
      if (announcer) announcer.textContent = 'session complete';
      
    }
  }, 1000);
}

function pausertimer() {
  if (!timerinput) return;
  if (!countdown) return;
  const left = Math.max(0, countdownend - nowseconds());
  cleartimer();
  timerinput.value = formatseconds(left);
  if (announcer) announcer.textContent = 'paused at ' + formatseconds(left);
}

if (startbtn && timerinput) {
  startbtn.addEventListener('click', function (e) {
    e.preventDefault();
    const secs = mintosec(timerinput.value);
    if (secs <= 0) return;
    starttimerfromseconds(secs);
  });
}

if (pausebtn) {
  pausebtn.addEventListener('click', function (e) {
    e.preventDefault();
    pausertimer();
  });
}

if (timerinput && startbtn) {
  timerinput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      startbtn.click();
    }
  });
}

loadtasks();
rendertasks();



// function createtask(str){
//   const html = `<li>
//           <span>${str}</span>
//           <button class="remove-task">✕</button>
//         </li>`
//   return html
// }

// taskbtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   let text = newtask.querySelector('input').value
//   tasklist.insertAdjacentHTML('beforeend', createtask(text));
// })
// tasklist.addEventListener('click', (e) => {
//   if (e.target.classList.contains('remove-task')) {
//     e.target.closest('li').remove();
//   }
// });