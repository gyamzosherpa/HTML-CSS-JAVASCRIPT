let registrationForm = document.querySelector('#register-form');
registrationForm.addEventListener('submit', (event) => {
  event.preventDefault(); //stops auto form submission
  if (validateForm()) {
    alert('Form submitted successfully');

    //clear input fields
    document.getElementById('register-form').reset();
  } else {
    alert('something went wrong');
  }
});

let validateForm = () => {
  return (
    checkUserName() &
    checkEmail() &
    checkContact() &
    checkPassword() &
    checkConfirmPassword() &
    checkGender()
  );
};

//username validation
let checkUserName = () => {
  let user_name = document.getElementById('username').value;
  let user_reg = /^[a-zA-Z0-9]{4,10}$/;
  if (user_reg.test(user_name)) {
    document.getElementById('username-feedback').innerHTML = '';
    return true;
  } else {
    document.getElementById('username-feedback').innerHTML =
      'User name is not valid';
    return false;
  }
};

//email
let checkEmail = () => {
  let email = document.getElementById('email').value;

  let email_reg =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //email validation
  if (email_reg.test(email)) {
    document.getElementById('email-feedback').innerHTML = '';
    return true;
  } else {
    document.getElementById('email-feedback').innerHTML = 'invalid email';
    return false;
  }
};

//contact validation
let checkContact = () => {
  let contact = document.getElementById('contactNumber').value;
  if (contact === '') {
    document.getElementById('contact-feedback').innerHTML = 'contact require';
    return false;
  } else if (isNaN(contact)) {
    document.getElementById('contact-feedback').innerHTML =
      'only number no alphabets';
    return false;
  } else if (contact.charAt(0) != 9) {
    document.getElementById('contact-feedback').innerHTML =
      'number should start with 9';
    return false;
  } else if (contact.length !== 10) {
    document.getElementById('contact-feedback').innerHTML =
      'number should be of 10 digits';
    return false;
  } else {
    document.getElementById('contact-feedback').innerHTML = '';
    return true;
  }
};

//password
let checkPassword = () => {
  //password validation
  let password = document.getElementById('password').value;
  let password_reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  if (password_reg.test(password)) {
    document.getElementById('password-feedback').innerHTML = '';
    return true;
  } else {
    document.getElementById('password-feedback').innerHTML =
      'Atleast one uppercase,special character and number require';
    return false;
  }
};

function showHide() {
  let toggle = document.getElementById('password');
  if (toggle.type === 'password') {
    toggle.type = 'text';
  } else {
    toggle.type = 'password';
  }
}

//confirm password
let checkConfirmPassword = () => {
  let c_password = document.getElementById('c-password').value;
  let password = document.getElementById('password').value;
  let password_reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  if (password_reg.test(password) && c_password === password) {
    document.getElementById('cpassword-feedback').innerHTML = '';
    return true;
  } else {
    document.getElementById('cpassword-feedback').innerHTML =
      'Password do not match';
    return false;
  }
};

function showHide2() {
  let toggle = document.getElementById('c-password');
  if (toggle.type === 'password') {
    toggle.type = 'text';
  } else {
    toggle.type = 'password';
  }
}

let checkGender = () => {
  let male = document.getElementById('male');
  let female = document.getElementById('female');
  let others = document.getElementById('others');

  if (male.checked == true) {
    document.getElementById('gender-feedback').innerHTML = '';
    console.log('value is', +male.value);
    return true;
  } else if (female.checked == true) {
    document.getElementById('gender-feedback').innerHTML = '';
    return true;
  } else if (others.checked == true) {
    document.getElementById('gender-feedback').innerHTML = '';
    return true;
  } else {
    document.getElementById('gender-feedback').innerHTML = '';
    return false;
  }
};

//username field with keyup event
let usernameEl = document.querySelector('#username');
usernameEl.addEventListener('keyup', () => {
  checkUserName();
});

//email
let emailEl = document.querySelector('#email');
emailEl.addEventListener('keyup', () => {
  checkEmail();
});

//contact
let contactEl = document.querySelector('#contactNumber');
contactEl.addEventListener('keyup', () => {
  checkContact();
});

//password
let passwordEl = document.querySelector('#password');
passwordEl.addEventListener('keyup', () => {
  checkPassword();
});

//confirm password
let cPasswordEl = document.querySelector('#c-password');
cPasswordEl.addEventListener('keyup', () => {
  checkConfirmPassword();
});
