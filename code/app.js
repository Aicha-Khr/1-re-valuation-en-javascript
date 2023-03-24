/* input pseudo (id="pseudo") */

// je récupère la saisie :
document.getElementById("pseudo").addEventListener("input", function (event) {
  /* Je récupère la valeur saise dans l'input pseudo. */
  let pseudo = document.getElementById("pseudo").value;

  if (pseudo.length < 3 || pseudo.length > 10) {
    document.querySelector(".pseudo").textContent =
      "⚠️ entre 3 et 10 caractères";
    document.querySelector(".pseudo").classList.add("invalid");
  } else {
    document.querySelector(".pseudo").classList.add("valid");
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
  } else {
    document.getElementById("email").classList.add("invalid");
    document.getElementById("email").textContent = "⚠️ format non valide.";
  }
});

/* input password (id="password") */
