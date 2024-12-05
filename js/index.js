// sign UP
var signUpName = document.querySelector(".sign-up-name");
var signUpEmail = document.querySelector(".sign-up-email");
var signUpPassword = document.querySelector(".sign-up-pass");
var logUpBtn = document.getElementById("btnSignUp");
var alertSignUp = document.querySelector(".alert-sign-up");
var toLogIN = document.getElementById("to-log-in");
// log to show
console.log(signUpName);
console.log(signUpEmail);
console.log(signUpPassword);
console.log(logUpBtn);
console.log(toLogIN);


// sign IN

var signInEmail = document.querySelector(".sign-in-email");
var signInPassword = document.querySelector(".sign-in-password");
var logInBtn = document.getElementById("btnSignIn");
var alertSignIn = document.querySelector(".alert-sign-in");
let toSignUp = document.getElementById("to-sign-up");

let userName = document.getElementById("user-name");
// console.log(userName, 'hh')

// log to show
console.log(signInEmail);
console.log(signInPassword);
console.log(logInBtn);
console.log(toSignUp)

let logOut = document.getElementById("logOut");
let containerSignIn = document.getElementById("container-sign-in");
let containerSignUp = document.getElementById("container-sign-Up");
let containerLogin = document.getElementById("container-smart-login");



// ------------------------------------

// global to replace sign in and sign up
toSignUp.addEventListener("click", function (e) {
  e.preventDefault();
  containerSignIn.classList.add('d-none')
  containerSignIn.classList.remove('d-block')
  containerSignUp.classList.add("d-block");
  containerSignUp.classList.remove("d-none");
});
toLogIN.addEventListener("click", function (e) {
  e.preventDefault();
  containerSignIn.classList.add('d-block')
  containerSignIn.classList.remove('d-none')
  containerSignUp.classList.add("d-none");
  containerSignUp.classList.remove("d-block");
});
logOut.addEventListener('click' , function(e){
  e.preventDefault()
  containerLogin.classList.replace('d-block' , 'd-none')
  containerSignIn.classList.replace("d-none", "d-block");
  
})





var users = [];
if (localStorage.getItem("users")) {
  users = JSON.parse(localStorage.getItem("users"));
}

// function add user
function addUser() {
  var user = {
    userName: signUpName.value,
    userEmail: signUpEmail.value,
    userPassword: signUpPassword.value,
  };
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}

// function clear form
function clearForm() {
  signUpName.value = null;
  signUpEmail.value = null;
  signUpPassword.value = null;
}

logInBtn.addEventListener("click", function (e) {
  e.preventDefault()
    for (var i = 0; i < users.length; i++) {
        if (signInEmail.value != users[i].userEmail) {
          alertSignIn.innerHTML = "enter a valid email"
        }else if (
          signInEmail.value == users[i].userEmail &&
          signInPassword.value != users[i].userPassword
        ) {
          alertSignIn.innerHTML = "password is not correct";
        } else{
            containerLogin.classList.replace('d-none' , 'd-block')
            containerSignIn.classList.replace("d-block", "d-none");
            userName.innerHTML = users[i].userName
        }
  }
});






// log up
logUpBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!/\w{2,14}/.test(signUpName.value)) {
    alertSignUp.innerHTML = "only first name .";
  } else if (
    !/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(signUpEmail.value)
  ) {
    alertSignUp.innerHTML = "email is not valid .";
  } else if (
    !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,}$/.test(
      signUpPassword.value
    )
  ) {
    alertSignUp.innerHTML = "write a complex password .";
  } else {
    alertSignUp.classList.replace("text-danger", "text-success");
    alertSignUp.innerHTML = "success .";
    addUser();
    clearForm();
  }
});
// email test











// log in

// logInBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("hello");
// });
