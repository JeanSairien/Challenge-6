/*JS pour cookie click*/
// 	var point =0;
// 	var score;

// function compteur(){
// 	point +=1;
// 	score = point;
// 	document.getElementById("point").innerHTML=score;
// };

// function multiplicateur(){
	
// }


	/* Variables déclarées */

var click = 0;
var score = 0;
var super_click = 0;
var cout_super_click = 0;
	

function compteur(){
	score +=1+super_click;
	document.getElementById("point").innerHTML=score;
	console.log(compteur);

}

	/* Fonction superclick  */


function superclick(){

		cout_super_click+=50;
	if(score >= cout_super_click){
		super_click+=2;
		score-=cout_super_click;
		document.getElementById("point").innerHTML=score;
		document.getElementById("da").disabled = true;
		console.log(cout_super_click);
		console.log(super_click);
	}
	else{
		document.getElementById("da").disabled = false;
		// 
		console.log(cout_super_click);
		console.log(super_click);
	}
}

function disable(){
	if(score >= cout_super_click){
		document.getElementById("da").disabled = false;
}
else{
		document.getElementById("da").disabled = false;
	}
}

	/* Fonction superclick  */
// function auto_click(){

// }