// on recupere l'input du code postale et le select de la ville avec leur classe
const inputCP = document.querySelector(".cp");
const selectVille = document.querySelector(".ville");

// on ajoute un evenement a l'input pendant la saisie du champ
inputCP.addEventListener("input", () => {

    let value = inputCP.value ; // on recupere la valeur ecrite dans le champ de l'input
    selectVille.innerText = null ; // on vide le contenu actuel de la liste de selection de ville

    // on effectue une requete fetch vers l'API de geolocalisation avec le code postale saisie
    fetch (`https://geo.api.gouv.fr/communes?codePostal=${value}&fields=region,nom,code,codePostaux,codeRegion&format=json&geometry=centre`)
    // console.log()
    .then((response) => response.json())  // on converti la reponse en JSON

    .then((data) => { // quand on recupere les donnees JSON

        data.forEach((ville) => { // on parcours le tableau data avec chauqe objet ville 
            let option = document.createElement("option"); // on cree un nouvel element d'option HTML
            option.value = `${ville.code}` // on definit la valeur de l'option au code de la ville
            option.innerHTML = `${ville.nom}` // on defini le texte de l'option au nom de la ville
            selectVille.appendChild(option) // on ajoute l'option au select qui contient la classe ville
        })
    })
})

/* 

fetch => c'est unméthode globale
    => Api Js
    => il charge une ressource sur le réseau et retourne une promesse dès que la réponse est disponible.
    => il peut être rejetée uniquement lors d'un probleme de réseau qui est en réalité un problème de permissions ou quelque chose de similaire.
    => une promesse ne sera pas rejetée en cas d'erreur HTTP, c'est pour cela que le gestionnaire then doit vérifier la réponse.

Promise = Promesse => c'est un objet qui représente une valeur qui peut etre disponible maintenant, dans le futur voire jamais.Elle ne bloquera pas le script

.then => c'est une méthode disponible sur les instances promise
    => il prend jusqu'a deux argument pour la réussite puis l'echec
    => le premier renvoie une promesse et le deuxième obtient le résultat précédent et le traite
    => il permet de gerer le resutlat en cas de reussite ou d'echec

*/
