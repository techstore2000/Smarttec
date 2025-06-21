// Beispiel: Admin Login
const login = () => {
  const username = document.querySelector('input[type="text"]').value;
  const password = document.querySelector('input[type="password"]').value;

  // Nur Admin darf rein
  if (username === "Nadim" && password === "Midanmirzazada1984@@") {
    // Weiterleitung zur App-Seite
    window.location.href = "app.html";
  } else {
    alert("Falscher Benutzername oder Passwort.");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector('button');
  if (button) {
    button.addEventListener("click", login);
  }
});
