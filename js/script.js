/*JS pour cookie click*/
	var point =0;
	var score;

function compteur(){
	point +=1;
	score = point;
	document.getElementById("point").innerHTML=score;
	//if (onclick multiplicateur)
		//point +=2;
};

function multiplicateur() {
	point +=2;
	score = point;
	document.getElementById("point").innerHTML=score;
}
