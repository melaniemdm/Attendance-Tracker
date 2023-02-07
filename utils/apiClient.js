

const urlBaseEdnPoint = "https://parseapi.back4app.com/login?username=melanieborja.pro@gmail.com&password=291285"
//console.log(urlBaseEdnPoint)

const urlBillet = 'https://parseapi.back4app.com/classes/billet/'


// recupere le token
async function getAuthorization(){
    const response= await axios.post(urlBaseEdnPoint,{ }, {headers:{'X-Parse-Application-Id': 'Es5seTH8kI3oSdINW5hz4oiisXxVpgzUvswk4G8C', 'X-Parse-REST-API-Key':'eq8RCMtAe6KvTnXwJMF9cDEVYL79gTMrr7tLW4VD', 'X-Parse-Revocable-Session': '1' }})
   //console.log(response.data.sessionToken)
    return response.data.sessionToken
    }

//create billet
 async function createBillet(newBillet,token ){
const response= await axios.post(urlBillet,newBillet,{headers:{'X-Parse-Application-Id': 'Es5seTH8kI3oSdINW5hz4oiisXxVpgzUvswk4G8C', 'X-Parse-REST-API-Key':'eq8RCMtAe6KvTnXwJMF9cDEVYL79gTMrr7tLW4VD', 'X-Parse-Session-Token': token }})
console.log(response.data)
return response.data
}


//recupere le billet
async function getBillet(token, idBillet){
    const response= await axios.get(urlBillet + idBillet,{headers:{'X-Parse-Application-Id': 'Es5seTH8kI3oSdINW5hz4oiisXxVpgzUvswk4G8C','X-Parse-REST-API-Key':'eq8RCMtAe6KvTnXwJMF9cDEVYL79gTMrr7tLW4VD','X-Parse-Session-Token': token, 'Content-Type': 'application/json'}})
    return response.data
    
}

//modification du billet
async function updateBillet(token, idBillet){
    const response= await axios.put(urlBillet + idBillet,{'est_scanne': true},{headers:{'X-Parse-Application-Id': 'Es5seTH8kI3oSdINW5hz4oiisXxVpgzUvswk4G8C','X-Parse-REST-API-Key':'eq8RCMtAe6KvTnXwJMF9cDEVYL79gTMrr7tLW4VD','X-Parse-Session-Token': token, 'Content-Type': 'application/json'}})
    return response.data
    
}