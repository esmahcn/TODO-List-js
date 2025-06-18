const button = document.getElementById('darkModeBtn');
const body = document.body;
const inputField = document.getElementById('inputField');
const addBtn = document.getElementById('addBtn');
const output = document.getElementById('output');
const counter = document.getElementById('counter');
const timerElement = document.getElementById('timer');

// Update the counter display
function updateCounter() {
  counter.textContent = output.children.length;
}

// Show or hide the "No items" message
function updateNoItemsMessage() {
  const noItemsMessage = document.getElementById('noItemsMessage');
  if (output.children.length === 0) {
    noItemsMessage.style.display = 'block';
  } else {
    noItemsMessage.style.display = 'none';
  }
}

// Dark/Light mode toggle
button.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
  button.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Add item on button click
addBtn.addEventListener('click', () => {
  const text = inputField.value.trim();
  if (text !== "") {
    const container = document.createElement('div');
    container.className = 'line-container';

    const right = document.createElement('span');
    right.className = 'right';
    right.textContent = text;

    right.addEventListener('click', () => {
      right.classList.toggle('crossed');
    });

    const left = document.createElement('span');
    left.className = 'left';
    left.textContent = 'x';

    left.addEventListener('click', () => {
      output.removeChild(container);
      updateCounter();
      updateNoItemsMessage();
    });

    container.appendChild(right);
    container.appendChild(left);
    output.appendChild(container);

    inputField.value = "";

    updateCounter();
    updateNoItemsMessage();
  }
});

// Timer setup (start from 0 up to 500)
let timerValue = 0;
const maxValue = 500;

function updateTimer() {
  if (timerValue < maxValue) {
    timerValue++;
    timerElement.textContent = timerValue;
  } else {
    clearInterval(timerInterval);
  }
}

const timerInterval = setInterval(updateTimer, 1000);

// Initial update on page load
updateCounter();
updateNoItemsMessage();