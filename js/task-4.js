const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const email = loginForm.elements.email.value.trim();
  const password = loginForm.elements.password.value.trim();

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  } else {
    const userObject = {
      email: email,
      password: password,
    };
    console.log(userObject);
  }

  loginForm.reset();
});

// const registerForm = document.querySelector('.login-form');
// const userData = { email: '', password: '' };

// const onSubmit = event => {
//   event.preventDefault();
//   const email = event.target.elements.email.value.trim();
//   const password = event.target.elements.password.value.trim();
//   if (email && password) {
//     userData.email = email;
//     userData.password = password;
//     console.log(userData);
//     event.target.reset();
//   } else {
//     alert('All form fields must be filled in');
//   }
// };

// registerForm.addEventListener('submit', onSubmit);
