score = 0;
Multiplicateur = 1;

function afficherScore() {
  document.getElementById("score").innerHTML = "Score : " + score;
}

function afficherMulti() {
  document.getElementById("affiche").innerHTML = "Senzu X" + Multiplicateur + " (Prochain senzu: " + prix() + ")";
  
}

function compteur() {
  score = score + Multiplicateur;
  afficherScore();
}

function prix() {
  return 50 * Multiplicateur * Multiplicateur;
}

function acheterMulti() {
  if (score >= prix()) {
    score = score - prix();
    Multiplicateur = Multiplicateur + 1;
    afficherMulti();
    afficherScore();
  } else {
    alert("Cliquez plus !!");
  }
}


