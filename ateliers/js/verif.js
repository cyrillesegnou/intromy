/*
 * fonction de vérification de formulaire
 *      renvoi vrai si le formulaire est bien rempli
 *      renvoi faux si le formulaire n'est pas validé
*/
function isFormValid(event){
    console.log(event);
    console.log(event.target);
    console.log(event.target.id);
    event.target.name = event.target.id;
    document.getElementById("error").style.visibility="hidden";
    let nom = document.getElementById("nom").value.trim();
    let civilite = document.getElementById("civilite").value.trim();
    let prenom = document.getElementById("prenom").value.trim();
    if(nom==="" || prenom === "" || civilite===""){
        document.getElementById("error").style.visibility="visible";
        event.preventDefault();
        return false;
    }
    return true;
}

function verifChamp(event){
    let eltInput = event.target;
    let val = eltInput.value.trim();
    let nom = eltInput.name;
    var eltErreur = document.getElementById("erreur-"+nom);
    if(val===""){
        eltErreur.style.visibility="visible";
        return false;
    }
    eltErreur.style.visibility="hidden";
    return true;
}

document.addEventListener("DOMContentLoaded",function(){
    console.log("DOM chargé");
    document.getElementById("connexion").addEventListener("click",isFormValid);
    let inputs = document.getElementsByClassName("verif")
    for(let i=0 ; i<inputs.length ;i++){
        inputs[i].addEventListener("blur",verifChamp);
    }
});