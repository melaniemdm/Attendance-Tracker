


// recuperation url et de l'id
const urlcourante = document.location.href; 
console.log(urlcourante)
let url = new URL(urlcourante)
let id = url.searchParams.get("id")
console.log(id)



async function main(){
    //recupere l'authentification
    const newToken = await getAuthorization()
    // recupere le billet dans le backend
    const billet = await getBillet(newToken, id)
    console.log(billet)
    const monImage = document.createElement("img");
    if(billet.est_scanne===true){
    monImage.src = "../images/refuse.png"  
    }else{
        monImage.src ="../images/valide.png"   
        const updatedBillet= await updateBillet(newToken, id)
        console.log(updatedBillet)
    }
   
  
const valid = document.querySelector('#iconValidation');
valid.innerHTML="";
valid.appendChild(monImage)
}

main();

//fonction d'affichage des icones






