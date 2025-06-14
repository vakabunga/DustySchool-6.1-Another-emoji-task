const chatWindow = document.querySelector('.chat-window');
const form = document.querySelector('.form');
const input = document.querySelector('.input');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = document.createElement('p');
  message.classList.add('message');
  message.textContent = input.value;
  chatWindow.appendChild(message);
  input.value = '';
});

new FgEmojiPicker({
  trigger: ['button'],
  position: ['bottom', 'left'],
  preFetch: true,
  insertInto: document.querySelector('.input'),
});
