function remplir(elementId,contenu){
    let elt = document.getElementById(elementId);
    elt.innerHTML = contenu;
}

function afficherDecompte(nbSecondes){
    // afficher dans le div 'container' le
    // décompte d'un timer
    if(nbSecondes>0){
        setTimeout(afficherDecompte,1000,--nbSecondes);
        let elt = document.getElementById("container");
        elt.innerHTML = `<h2>${nbSecondes}</h2>`; // AltGr 7
        //elt.innerHTML = "<h2>"+nbSecondes+"</h2>"
        elt.style.color = 'red';       
    }
}

function lancerDecompte(){
    // récupérer la valeur du champ
    // invoquer afficherDecompte
    let elt = document.getElementById("val");
    let val = elt.value;
    afficherDecompte(val);
}

function showMap(eltDom){
    let lat = eltDom.dataset.latitude;
    let lng = eltDom.dataset.longitude;

    alert(`latitude : ${lat} et longitude ${lng}`);

}
