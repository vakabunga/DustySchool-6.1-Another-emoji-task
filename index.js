"use strict";

var chatWindow = document.querySelector('.chat-window');
var form = document.querySelector('.form');
var input = document.querySelector('.input');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  var message = document.createElement('p');
  message.classList.add('message');
  message.textContent = input.value;
  chatWindow.appendChild(message);
  input.value = '';
});
new FgEmojiPicker({
  trigger: ['button'],
  position: ['bottom', 'left'],
  preFetch: true,
  insertInto: document.querySelector('.input')
});