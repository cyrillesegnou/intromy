//function changeColor (){
  //  document.getElementById("ville1").target.style.color.backgroundcolor = "blue" ;
//}

//document.addEventListener ("DOMContentLoaded", function(){

  //  document.getElementById("ville1").addEventListener("mouseenter", changeColor)
//});

document.addEventListener ("DOMContentLoaded", function(){
    let lis = document.getElementsByTagName ("li");

  document.getElementsByTagName("li");

  for (let i = 0 ; i < lis.length; i++){
      lis[i].addEventListener("mouseenter", e => e.target.style.addEventListener = "blue");
      lis[i].addEventListener("mouseout", e => e.target.style.addEventListener = "");
  }
})