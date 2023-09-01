function color(){
let para = document.querySelector("#paragraph")
if (para.style.backgroundColor == "black") {
      para.style.backgroundColor = "white"
      para.style.color = 'black'
}
else{
      para.style.backgroundColor= "black";
      para.style.color= "white";
}
}