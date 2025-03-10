let btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();

  let nameValue = document.getElementById("name").value.trim();
  let emailValue = document.getElementById("email").value.trim();
  let passwordValue = document.getElementById("password").value.trim();

  if (nameValue === "") {
    setError("name", "Name is required");
  } else {
    setSuccess("name");
  }

  if (!validateEmail(emailValue)) {
    setError("email", "Invalid email format");
  } else {
    setSuccess("email");
  }

  if (passwordValue === "" || passwordValue.length < 6) {
    setError("password", "Invalid password format");
  } else {
    setSuccess("password");
  }
});

const setSuccess = function (inputId) {
  let input = document.getElementById(inputId);
  let errorText = input.nextElementSibling;
  errorText.textContent = "";
};
const setError = function (inputId, message) {
  let input = document.getElementById(inputId);
  let errorText = input.nextElementSibling;
  errorText.style.color = "#ff7474";
  errorText.textContent = message;
};

const validateEmail = function (email) {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
