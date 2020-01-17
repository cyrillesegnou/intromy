function isValidForm (event){
    console.log (event);
    console.log (event.target);
    console.log (event.target.name);

    document.getElementById("error").style.visibility = "hidden";
   
       if ((document.getElementById("user").value === "")
        ||
    (document.getElementById("name").value ==="")) {
        
        console.log ("erreur sur identifiant");
        event.preventDefault();

        return false 
    }
    return true 
}

//onclick="showMap(this)"
function verifChamp (event){
    
    console.log (event);
    console.log (event.target);
    console.log (event.traget.id);
    let val = event.target.value;
    let nom = event.target.name;
    var eltError = document.getElementById("erreur-" +nom);

    if (val ==="") {
        eltError.style.visibility = "visible";

        event.preventDefault();

        return;
        }
    eltError.style.visibility = "hidden" ;
   
}
//onblur="verifChamp(this);
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("name").addEventListener("blur", verifChamp)
} );

document.addEventListener("DOMContentLoaded", function (){ 
    document.getElementById ("user").addEventListener("blur", verifChamp)
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("ville").addEventListener("click", isValidForm)
});
//creation de fonction annonyme
document.addEventListener("DOMContentLoaded", function (){
    document.getElementById("connexion").addEventListener("click", isValidForm)

});
