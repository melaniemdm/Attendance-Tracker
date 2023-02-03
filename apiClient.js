

const urlBaseEdnPoint = "https://parseapi.back4app.com/login?username=melanieborja.pro@gmail.com&password=291285"
console.log(urlBaseEdnPoint)

const urlBillet = 'https://parseapi.back4app.com/classes/billet/'
const idBillet = 'UNA8oqCeOe'

// recupere le token
async function getAuthorization(){
    const response= await axios.post(urlBaseEdnPoint,{ }, {headers:{'X-Parse-Application-Id': 'Es5seTH8kI3oSdINW5hz4oiisXxVpgzUvswk4G8C', 'X-Parse-REST-API-Key':'eq8RCMtAe6KvTnXwJMF9cDEVYL79gTMrr7tLW4VD', 'X-Parse-Revocable-Session': '1' }})
   //console.log(response.data.sessionToken)
    return response.data.sessionToken
    }



async function main() {
//contient l'id du billet    
const newToken = await getAuthorization()
//console.log(newToken)
//const testBillet = await createBillet(newBillet,newToken )
const billet = await getBillet(newToken)
}
//main()

//create billet
 async function createBillet(newBillet,token ){
const response= await axios.post(urlBillet,newBillet,{headers:{'X-Parse-Application-Id': 'Es5seTH8kI3oSdINW5hz4oiisXxVpgzUvswk4G8C', 'X-Parse-REST-API-Key':'eq8RCMtAe6KvTnXwJMF9cDEVYL79gTMrr7tLW4VD', 'X-Parse-Session-Token': token }})
console.log(response.data)
return response.data
}


//recupere le billet
// async function getBillet(token){
//     console.log(urlBillet + idBillet)
//     console.log(token) 
//     const response= await axios.get(urlBillet,{},{headers:{'X-Parse-Application-Id': 'Es5seTH8kI3oSdINW5hz4oiisXxVpgzUvswk4G8C','X-Parse-REST-API-Key':'eq8RCMtAe6KvTnXwJMF9cDEVYL79gTMrr7tLW4VD','X-Parse-Session-Token': token}})
//     console.log(response)
//     return response
    
// }