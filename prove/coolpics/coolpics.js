// MENU BUTTON
const menu = document.querySelector('nav');
const button = document.querySelector('.menu-btn');

button.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// WINDOW RESIZE HANDLING
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1000) {
    menu.classList.remove('show');
  }
});

// VIEWER TEMPLATE FUNCTION
function viewerTemplate(src, alt) {
  return `
    <img src="${src}" alt="${alt}">
    <button class="close-viewer">X</button>
  `;
}

// MODAL LOGIC
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');

gallery.addEventListener('click', (e) => {
  if (e.target.tagName === "IMG") {
    const smallSrc = e.target.getAttribute('src');
    const alt = e.target.getAttribute('alt');
    const fullSrc = smallSrc.replace("-sm", "-full");

    modal.innerHTML = viewerTemplate(fullSrc, alt);
    modal.showModal();

    modal.querySelector('.close-viewer').addEventListener('click', () => {
      modal.close();
    });
  }
});

// CLOSE MODAL ON BACKGROUND CLICK
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});

// ESC KEY CLOSE
document.addEventListener('keydown', (event) => {
  if (event.key === "Escape") {
    modal.close();
  }
});