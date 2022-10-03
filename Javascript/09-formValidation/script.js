const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorMsg = document.getElementById('error');

form.addEventListener('submit', (e) => {
  let messages = [];
  if (name.value === '' || name.value === '') {
    messages.push('Please enter your name');
  }

  if (password.value.length <= 6) {
    messages.push('Password must be at least 6 characters');
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters');
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password');
  }

  if (messages.length > 0) {
    //stop refresh
    e.preventDefault();
    errorMsg.innerText = messages.join(', ');
  }
});
