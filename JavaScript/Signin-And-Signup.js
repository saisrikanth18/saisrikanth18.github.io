const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

//Storing Sign up data in local storage.
function addData() {
  const setUserName = document.getElementById("userName").value;
  const setPassword = document.getElementById("password").value;

  localStorage.setItem('UserName', setUserName);
  localStorage.setItem('Password', setPassword);
}

//Validating User Sign in data.
function checkData() {
  const enterUserName = document.getElementById("loginUserName").value;
  const enterPassword = document.getElementById("loginPassword").value;

  const getUserName = localStorage.getItem('UserName');
  const getPassword = localStorage.getItem('Password');

  if (enterUserName === getUserName) {
    if (enterPassword === getPassword) {
      window.location.href = '../resumes-list.html';
    } else {
      alert("Wrong password");
    }
  } else {
    alert("Invalid details");
  }
}

//Restricting back function in browser.
function preback() {
  window.history.forward();
}
setTimeout("preback()", 0);
window.onunload = function () { null };

