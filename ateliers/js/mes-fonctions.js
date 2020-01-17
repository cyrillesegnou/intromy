function isNumber(n){
   return !isNaN(n);
}

function testIsNumber(){
    var n = "3";
    console.log(isNumber(n)==true);
    n = "a";
    console.log(isNumber(n)==false);
}

/*
*  vérifie si un email est valide
*   xxx@yy.zz
*   xxx => au moins 2 carcatères
*   yy  => au moins 2 caractères
*   zz  => au moins 2 caractères 
*/
function isMailValid(email){
    let arobase = email.indexOf("@");
    let point = email.lastIndexOf(".");
    if(email.indexOf("@",arobase+1)!=-1) // un seul @
        return false; 
    if(arobase<2)
        return false;
    if(point - arobase < 3)
        return false;
    if(email.length - point < 3)
        return false;
    return true;
}

function testIsMailValid(){
    let ok = true;
   
    ok = ok & isMailValid("xx@yy.zz");
    ok = ok & !isMailValid("xx@y@y.zz");
    ok = ok & !isMailValid("xx@y.zz");
    ok = ok & !isMailValid("xx@yy.z");
    ok = ok & !isMailValid("x@yy.zz");

    console.log(ok==true);
}

/*
 * la valeur du mois est comprise entre 1 et 12
 *
*/
function afficherJourNaissance(an,mois,jour){
    let jours = ['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];
    let d = new Date(an,mois-1,jour);
    console.log(jours[d.getDay()]);

}
