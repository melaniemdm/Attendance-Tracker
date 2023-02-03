async function inscription(){

    var error= document.getElementById("error_message");
    let name = document.querySelector('#name').value;
    if(name.length < 1){
        text = "Name Should be more than 1 characters";
        error.innerHTML = text;
        return false;
    }
    let lastName = document.querySelector('#lastName').value;
    if(lastName.length < 1){
        text = "Name Should be more than 1 characters";
        error.innerHTML = text;
        return false;
    }
    let email = document.querySelector('#email').value;
    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Your email is invalid.";
        error_message.innerHTML = text;
        return false;
    }
    let paiement = "";
    if(document.querySelector('#virement').value){
        paiement = 'virement'
    }
    if(document.querySelector('#cheque').value){
        paiement = 'cheque'
    }
    if(document.querySelector('#espece').value){
        paiement = 'espece'
    }
    const newBilletInfo={
        nom : lastName,
        prenom: name, 
        email: email ,
        paiement:paiement
    }
    const newToken = await getAuthorization()
    const newBillet = await createBillet(newBilletInfo,newToken )
    console.log(newBillet.objectId);
    //genere le new billet avec nouvelle url
    document.location.href='billet.html?id='+ newBillet.objectId
}


