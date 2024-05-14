const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const emailError = document.querySelector('#email + .error');
const countryError = document.querySelector('#country + .error');
const zipError = document.querySelector('#zip + .error');
const passwordError = document.querySelector('#password + .error');
const password2Error = document.querySelector('#password2 + .error');

const form = document.querySelector('form');

// add validators for the first 4 input fields
validator(email, emailError);
validator(country, countryError);
validator(zip, zipError);
validator(password, passwordError);

// a separate validator for the password2 field
password2.addEventListener('keyup', () => {
  if (password2.value.length < 8) {
    password2.validity.valid = false;
    password2Error.textContent = "Password is too short";
  } else if (password2.value !== password.value) {
    password2.validity.valid = false;
    password2Error.textContent = "Password does not match";
  } else {
    password2.validity.valid = true;
    password2Error.textContent = "";
    password2Error.className = "error";
  }
});

// check for all fields for validity when form submits
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.validity.valid
    && country.validity.valid
    && zip.validity.valid
    && password.validity.valid
    && password2.validity.valid) {
    alert("High-five!");
  } else {
    alert("Nope!");
  }
})

// checks input field's validity on focusout
function validator (input, errorSpan) {
  input.addEventListener('focusout', (e) => {
    if (input.validity.valid) {
      errorSpan.textContent = "";
      errorSpan.className = "error";
    } else showError(input, errorSpan);
  });
}

// displays various error messages to the specific error span
function showError (input, errorSpan) {
  if (input.validity.valueMissing) {
    errorSpan.textContent = "Data required";
  } else if (input.validity.typeMismatch) {
    errorSpan.textContent = "Invalid format";
  } else if (input.validity.tooShort) {
    errorSpan.textContent = "Data too short";
  } else if (input.validity.tooLong) {
    errorSpan.textContent = "Data too long";
  } else if (input.validity.patternMismatch) {
    errorSpan.textContent = "Pattern requirement not met";
  }
  errorSpan.className = "error active";
}