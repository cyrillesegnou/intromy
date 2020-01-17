function isNumber (n){
    return !isNaN(n);
}
function testNumber (){
    var n = "3";
    console.log(isNumber (n)== true);
    n = "a";
    console.log(isNumber (n)== false);
}
    function testEval() {
        var t = "2+2"
        var r = eval(t);
        console.log(r)
    }
    function testEval2 () {
        var t = "{'couleur' : 'vert'; 'foo' : 2, 'bar'}";
        var r = eval("+t+");
        console.log(r)
    }
    function jourNaissance (an, mois, jours){
      //  let d = new Date (an, mois-1, jours);
     //   let jours = ["dimanche", "lundi", "mardi","mercredi", "Jeudi", "vendredi", "samedi"] ;
        var jourNaissance = new Date (an, mois-1, jours) ;

        var jourNaissancec = jourNaissance.getDay();
        console.log(jours[d.getDay()]);
        console.log(jourNaissancec);
    }

        function joursDeNaissance (){
            let jours = ["mardi", "lundi", "vendredi", "samedi", "jeudi"] ;
            let d = new Date (an, mois-1, jours);
            console.log(jours[d.getDay()]);
    }
    function triNumber (){
        
        var notes = [2, 6,  47, 56, 29,81, 35, 55, 62, 48];

       console.log(notes);

     var plusgrand = notes.sort(function (a, b) {return b - a} ) ;

        console.log(plusgrand);

    }
    function isMailValide (email){

        var z = email.indexOf("@");
        var t = email.indexOf(".");
       
        var valid1 = new RegExp ("@");

        console.log(z);
        console.log(valid1);
   }
   function show (n){
       console.log (n+ ":" + new Date());
   }
   function testSetInterval(){
       let timer = setInterval(show, 1000); 
   }


   //function decompte(n){
       // console.log (Date.setInterval)
  // }
   //function minuteur (nbSeconde){

  //  let decompte = nbSeconde;
  //  let timer = setInterval(( , 1000) => {
   //     
  //  }, interval);

  //      var nbseconde = 10 ;

  //      var x = setTimeout(show, 10000);
  
        
   //    console.log(x);
    //  }

    //let decompte = 0 ;
   // let timer = 0;


    function minuteur (nbSecondes) {
        function count (){
        console.log(decompte --);
             if (decompte == 0) {
        clearInterval(timer);
            timer = 0;
            console.log("fin");
            let decompte = ndSecondes;
            let timer = setInterval(count, 200);

    }
    array.forEach(image => { 
        
    });
}

    }
    