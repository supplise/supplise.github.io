const 
const BTN=document.querySelector(".btn");
const TEXT_BOX=document.querySelector(".text_box span");

BTN.addEventListener("click",main);
function main(){
    let v=Math.floor(Math.random()*a.length);
    TEXT_BOX.innerHTML=a[v];
    TEXT_BOX.style.left="calc(50% - "+TEXT_BOX.offsetWidth/2+"px)";
}
