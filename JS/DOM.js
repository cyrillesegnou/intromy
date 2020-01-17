function remplir (elementId, contenu) {
    let elt = document.getElementById(elementId);
    elt.innerHTML = contenu ;
}
function afficherDecompte (nbSeconde){
    let number = document.getElementById(elementId);
    elt.innerHTML = nbSeconde ;
    function minuteur (nbSecondes) {
        function count (){
            console.log(decompte --);
            if (decompte == 0) {
                clearInterval(timer);
                timer = 0;
                console.log("fin");
        
                let decompte = ndSecondes;
                let timer = setInterval(count, 1000);
}}}}
function afficherDecompte2(nbSecondes){

    let elt = container2;

    let timer = setInterval(frame, 1000);
        function frame (){
            if (nbSecondes == 0){
                clearInterval(timer);
                elt.innerHTML = "<h3> FIN!</h3>";
            }
            else {
            nbSecondes -- ;
            elt.innerHTML = "<h3>"+nbSecondes+"</h3>";
          
            elt.style.color = 'red';
         }
     }
 }

function lancerDecompte(){
   
    let elt1 = document.getElementById("cnt3");
    
    let elt = document.getElementById("valeur");
         
    let timer = setInterval(count, 1000);

        function count (){

            if (elt.value == 0){
                clearInterval(timer);
                elt1.innerHTML = "<h3> FIN!</h3>";
            }
            else {
            elt.value -- ;
           elt.innerHTML = "<h3>"+nbSecondes+"</h3>";
           // elt1.innerHTML = `<h3>${elt.value}</h3> ` ; 
            //elt1.style.color = 'red';
         }
     }
}
function showMap (eltDom){
    let lat = eltDom.dataset.latitude ;
    let lng = eltDom.dataset.longitude ;

   // alert(`latitude : ${lat} et longitude : ${lng}`);
    alert ("latitude : "+lat+" longitude  : "+lng );


}