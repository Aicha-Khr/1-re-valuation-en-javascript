/* input pseudo (id="pseudo") */

// je récupère la saisie :
document.getElementById("pseudo").addEventListener("input", function (event) {
  /* Je récupère la valeur saise dans l'input pseudo. */
  let pseudo = document.getElementById("pseudo").value;

  if (pseudo.length < 3 || pseudo.length > 10) {
    document.querySelector(".pseudo").textContent =
      "⚠️ entre 3 et 10 caractères";
    document.getElementById("pseudo").classList.add("invalid");
  } else {
    document.getElementById("pseudo").classList.add("valid");
    document.querySelector(".pseudo").textContent = " ";
  }
});

/* input email (id="email") */
// je récupère la saisie :
document.getElementById("email").addEventListener("input", function (event) {
  /* Je récupère la valeur saise dans l'input email. */
  let email = document.getElementById("email").value;
  let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.match(pattern)) {
    document.getElementById("email").classList.add("valid");
    document.querySelector(".email").textContent = "";
  } else {
    document.getElementById("email").classList.add("invalid");
    document.querySelector(".email").textContent = "⚠️ format non valide.";
  }
});

/* input password (id="password") */
// je récupère la saisie :
document.getElementById("password").addEventListener("input", function (event) {
  /* Je récupère la valeur saise dans l'input password. */
  let password = document.getElementById("password").value;

  let rgxpassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$/;

  if (password.match(rgxpassword)) {
    document.getElementById("password").classList.add("valid");
    document.querySelector(".password").textContent = "";
  } else {
    document.querySelector(".password").textContent =
      "⚠️ 8 caractères minimum (une majuscule et un caractère spécial).";
    document.getElementById("password").classList.add("invalid");
  }
});

/* Input password2 (id=password2) */
// je récupère la saisie :
document
  .getElementById("password2")
  .addEventListener("input", function (event) {
    /* Je récupère la valeur saise dans l'input password2. */
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;

    if (password2 === password) {
      document.getElementById("password2").classList.add("valid");
      document.querySelector(".password2").textContent = "";
    } else {
      document.getElementById("password2").classList.add("invalid");
      document.querySelector(".password2").textContent =
        "⚠️ Mots de passe différents.";
    }
  });
