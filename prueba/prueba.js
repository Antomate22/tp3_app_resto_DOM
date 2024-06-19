let listaD = document.createElement("ul");
document.body.appendChild(listaD);

let futer = document.getElementById("piepagina");
futer.appendChild(listaD);

let salto = document.createElement("hr")

let itemlista1 = document.createElement("li");
itemlista1.textContent = "achusssssss!";

let item3 = document.createElement("li");
itemlista1.textContent = "si mami!";

let itemlista2 = document.createElement("li");
itemlista2.textContent = "salud!";
listaD.appendChild(itemlista1);
listaD.appendChild(itemlista2);
listaD.appendChild(salto);
listaD.appendChild(item3);
item3.style.fontfamily = "Impact";
futer.style.padding = "1rem"
futer.style.boxShadow = "0 0 15px -5 black";


 let hacheTres = document.querySelector("h3")
 hacheTres.classList.add("subrayado")