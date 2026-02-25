// Character object
const character = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: 8,
  health: 100,

  attacked: function () {
    this.health -= 20;
    if (this.health < 0) this.health = 0;
    renderStats();
  },

  levelUp: function () {
    this.level += 1;
    renderStats();
  }
};

// Render stats into the HTML
function renderStats() {
  document.querySelector("#level").textContent = character.level;
  document.querySelector("#health").textContent = character.health;
}

// Button listeners
document.querySelector("#attackBtn").addEventListener("click", function () {
  character.attacked();
});

document.querySelector("#levelBtn").addEventListener("click", function () {
  character.levelUp();
});

// Initial render
renderStats();