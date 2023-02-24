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
    if(document.querySelector('#virement').checked === true){
        paiement = 'virement'
    }
    if(document.querySelector('#cheque').checked === true){
        paiement = 'cheque'
    }
    if(document.querySelector('#espece').checked === true){
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
  /* Logging the newBillet.objectId to the console. */
    console.log(newBillet.objectId);
    //genere le new billet avec nouvelle url
    const url_complement = deploiement==="github"?'/Attendance-Tracker':"";
    document.location.href= window.location.protocol + '//' + window.location.host + url_complement +'/billet/billet.html?id='+ newBillet.objectId
}


