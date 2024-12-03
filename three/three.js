document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form');
  const rememberMeCheckbox = document.querySelector('input[type="checkbox"]');
  const emailInput = form.querySelector('input[type="email"]');
  const passwordInput = form.querySelector('input[type="password"]');
  const recoverPasswordLink = document.querySelector('.recover-password');
  const loginButton = form.querySelector('button');

  if (localStorage.getItem('rememberMe') === 'true') {
    rememberMeCheckbox.checked = true;
    emailInput.value = localStorage.getItem('email') || '';
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!emailInput.value || !passwordInput.value) {
      alert('Please fill in both fields');
      return;
    }

    if (rememberMeCheckbox.checked) {
      localStorage.setItem('rememberMe', 'true');
      localStorage.setItem('email', emailInput.value);
    } else {
      localStorage.removeItem('rememberMe');
      localStorage.removeItem('email');
    }

    alert('Login successful!');
  });

  recoverPasswordLink.addEventListener('click', function (event) {
    event.preventDefault();
    alert('Password recovery functionality goes here.');
  });
});
