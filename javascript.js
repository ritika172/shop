var list=document.querySelector("ul");
// console.log(list);
list.addEventListener(
    "click",
    function (ev) {
        if (ev.target.tagName ==="LI"){
            ev.target.classList.toggle("checked");
        }
    },
    false
);
var myNodelist=document.getElementsByTagName("LI");
var i;
for(i=0;i<myNodelist.length;i++){
    var span =document.createElement("SPAN");
    var txt=document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
var close=document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){
close[i].onclick=function(){
    var div=this.parentElement;
    div.style.display="none";
};
}