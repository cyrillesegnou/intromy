document.addEventListener("DOMContentLoaded",function(){
    let lis = document.getElementsByTagName("li");
    for(let i=0 ; i<lis.length ; i++){
        lis[i].addEventListener("mouseover",e => e.target.style.backgroundColor = "yellow");
        lis[i].addEventListener("mouseout",e => e.target.style.backgroundColor = "");
    }
});