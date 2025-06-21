
const login = () => {
  const benutzername = document.querySelector('#username').value;
  const passwort = document.querySelector('#password').value;

  if (benutzername === "Nadim" && passwort === "Midanmirzazada1984@@") {
    window.location.href = "app.html";
  } else {
    alert("Falscher Benutzername oder Passwort.");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const taste = document.querySelector('#loginBtn');
  if (taste) {
    taste.addEventListener("click", login);
  }
});
