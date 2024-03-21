let listaDestinacija=document.getElementById("lista-destinacija");
console.log(listaDestinacija);

let naslov=document.getElementsByClassName("title");
console.log(naslov);

let element=document.getElementsByTagName("li");
console.log(element);

let wrap=document.querySelector("#wrapper");
console.log(wrap);

let destinacije=document.querySelectorAll(".naziv");
console.log(destinacije);
console.log("parent node liste destinacije je", listaDestinacija.parentNode);
console.log("chilf node su",listaDestinacija.ChildNodes);

console.log("lista dest next sibling je",listaDestinacija.nextElementSibling);
console.log("lista dest next previous je",listaDestinacija.previousElementSibling);

let baner=document.querySelector("#page-baner");
console.log("Node name je",baner.nodeName);
console.log("Node type je",baner.nodeType);
console.log("Node value je",baner.nodeValue);

let destinacija1=document.querySelector(".naziv");
destinacija1.innerHTML="<b>Grad</b> svetlosti"

let dugmici=document.querySelectorAll("obrisi");

