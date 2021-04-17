const a=["강수철","고구범","곽성훈","김경래","김태헌","김태현","영훈","안재혁","연우","예진","이원재","재원","전빈","전준식","정민","정준영","지훈","엄태성","혁종"];
const BTN=document.querySelector(".btn");
const TEXT_BOX=document.querySelector(".text_box span");

BTN.addEventListener("click",main);
function main(){
    let v=Math.floor(Math.random()*a.length);
    TEXT_BOX.innerHTML=a[v];
    TEXT_BOX.style.left="calc(50% - "+TEXT_BOX.offsetWidth/2+"px)";
}
