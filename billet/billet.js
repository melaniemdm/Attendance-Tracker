
// recuperation url et de l'id
const urlcourante = document.location.href; 
//console.log(urlcourante)
let url = new URL(urlcourante)
let id = url.searchParams.get("id")
console.log(id)

// construction de l'url de verif de billet
const verifBillet= window.location.protocol+ "//" +window.location.host+"/verif-Billet/verifBillet.html?id="+id

var qrcode = new QRCode("qrcode", {
	width : 100,
	height : 100
});
qrcode.makeCode(verifBillet);

console.log(verifBillet)

let numBilletUnique = document.querySelector("#numEbillet");
numBilletUnique.innerHTML = 'E-Billet N° ' +id