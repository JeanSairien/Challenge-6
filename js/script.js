var score = 0;
var Multiplicateur = 1;
var cout_autoclick = 0;
var ratio_autoclick= 0;
incrementeAutoclick();

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
 /* Coût du multiplicateur */
 function incrementeAutoclick(){
 		cout_autoclick+=2;
 		console.log("Autoclick a un nouveau cout de : "+cout_autoclick);
 		return cout_autoclick;
 		console.log("ratio_autoclick");
 }

	/* Achat de Auto_click */
function auto_click(){
 	
 	if(score >= cout_autoclick){
 		var auto_interval;
 		
 		ratio_autoclick += 10;
 		auto_interval= setInterval(function(){ compteur(); }, 2000+ratio_autoclick);
 		score-=cout_autoclick;
 		incrementeAutoclick();

 		console.log("Autoclick à une valeur de:"+cout_autoclick);
 		console.log("Autoclick à un ratio de:"+ratio_autoclick);
 	}
 	else{
 		console.log("Autoclick à une valeur de:"+cout_autoclick);
 	}
}

function afficherAutoclick() {
  document.getElementById("auto").innerHTML = "Gorille X" + ratio_autoclick + " (Prochain senzu: " + cout_autoclick + ")";
  
}