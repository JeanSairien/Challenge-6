
	/* Variables déclarées */
var score = 0;
var achat = 0;
var cout = 0;
var cout_autoclick = 0;
incrementeSuperClick();	/*J'appel à nouveau ma fonction imcrementeSuperClick qui donnera sa valeur à la variable achat*/
incrementeAutoclick();

function compteur(){
	score +=1+achat;
	document.getElementById("point").innerHTML=score;
	console.log("Score : "+score);
}

	/* Coût du multiplicateur */
 function incrementeSuperClick(){
 		cout+=50;
 		console.log("Multiplicateur a un nouveau cout de : "+cout);
 		return cout;
 }

 /* Coût du multiplicateur */
 function incrementeAutoclick(){
 		cout_autoclick+=10;
 		console.log("Autoclick a un nouveau cout de : "+cout_autoclick);
 		return cout_autoclick;
 }

 	/* Achat de multiplicateur */
function achat_multiplicateur(){
	if(score >= cout){
		achat+=2;
		score = score-cout;
		/*Je rappel la fonction d'incrementeSuperClick pour que la boucle
		 puisse prendre en compte la nouvelle valeur de cout*/
		incrementeSuperClick();
		/*Fin*/
		document.getElementById("point").innerHTML = score;
		console.log(cout);
		console.log(achat);
	}

	else{
		console.log(cout);
		console.log(achat);
	}
}

	/* Achat de Auto_click */
 function auto_click(){
 	
 	if(score >= cout_autoclick){
 		var myVar;
 		var ratio_autoclick= 0;
 		ratio_autoclick += 10;
 		myVar= setInterval(function(){ compteur(); }, 2000+ratio_autoclick);
 		ratio_autoclick = 10;
 		score-=cout_autoclick;
 		incrementeAutoclick();

 		console.log("Autoclick à une valeur de:"+cout_autoclick);
 		console.log("Autoclick à un ratio de:"+ratio_autoclick);
 	}
 	else{
 		console.log("Autoclick à une valeur de:"+cout_autoclick);
 	}
 }