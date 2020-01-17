"use strict";
function hello(){
    message = "bonjour";
    console.log("hello = "+message);
}

function bar(){
    let message = "bonjour";
    for(var i = 0 ; i<10 ; i++){
        console.log("message "+i);
    }
    console.log("i vaut : "+i);
}

function foo(){
 //   hello();
    bar();
    console.log("i vaut : "+i);
}

function testAffichageArray(){
    let jours = [];

    array.forEach(element => {
        
    });
}
function triNombre(a,b){
    return a-b;
}

function tri(){
    let tab = [10,5,98,7,4,0];
    console.log(tab);
    tab.sort((a,b)=>a-b);
    console.log(tab);
}

function show(a){
    console.log(a+ " : " + new Date());
}

function testSetInterval(){
    let timer = setInterval(show,1000,"foo");

}
/*
let decompte = 0;
let timer = 0;

function count(){
    console.log(decompte--);
    if(decompte == 0){
        clearInterval(timer);
        timer = 0;
        console.log("FIN");
    }
}
*/
function minuteur(nbSecondes){
    function count(){
        console.log(decompte--);
        if(decompte == 0){
            clearInterval(timer);
            timer = 0;
            console.log("FIN");
        }
    }
    // décompter un nombre de secondes
    // arrêter le timer quand le décompte est atteint
    let decompte = nbSecondes;
    let timer = setInterval(count,1000);
}