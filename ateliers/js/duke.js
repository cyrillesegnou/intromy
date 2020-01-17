var duke = {
	nbImages:5,
	imgEnCours:0,
	delai:200,
	pas:10,
	timer:null,
	nomImage:'images/duke_',
	extension:'.gif',
	imgId:'duke',
	showNext : function(){
		console.log("showNext : "+duke.nomImage+duke.imgEnCours+duke.extension);
		duke.imgEnCours = (++duke.imgEnCours) % duke.nbImages;
		document.getElementById(duke.imgId).src = duke.nomImage+duke.imgEnCours+duke.extension;
	}
};

function start(){
	console.log("start");
	if(duke.timer==null)
		duke.timer = setInterval(duke.showNext, duke.delai);
}

function stop(){
	console.log("stop");
	clearInterval(duke.timer);
	duke.timer = null;
}

function plus(){
	if(duke.delai<20)
		return;
	duke.delai -= duke.pas;
	clearInterval(duke.timer);
	duke.timer = setInterval(duke.showNext, duke.delai);
	console.log("plus vite : "+duke.delai);
}

function moins(){
	duke.delai += duke.pas;
	clearInterval(duke.timer);
	duke.timer = setInterval(duke.showNext, duke.delai);
	console.log("moins vite : "+duke.delai);
}

document.addEventListener("DOMContentLoaded",function(){
	document.getElementById("start").addEventListener("click",start);
	document.getElementById("stop").addEventListener("click",stop);
	document.getElementById("plus").addEventListener("click",plus);
	document.getElementById("moins").addEventListener("click",moins);
});