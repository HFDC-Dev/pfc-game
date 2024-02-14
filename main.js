// Déclarations des variables

const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantResultat = document.getElementById('resultat');
let resetBtn = document.getElementById('reset');


const choixPossibles = document.querySelectorAll('button');

let choixUtilisateur
let resultat
let choixOrdinateur

// Créer un evenement 'Click' sur les buttons 

choixPossibles.forEach(choixPossible => choixPossible.addEventListener('click', (e)=>{
    // récupération de l'ID du boutton 
    choixUtilisateur = e.target.id;
    // Ajout d'image correspondant au choix de l'utilisateur
    generer_choix_ordinateur()
    verification()
}))

//Créer un evenement 'Click' pour le button Reset

resetBtn.addEventListener('click', function() {
    resetValues();
});



// Fonction choix de l'ordinateur
function generer_choix_ordinateur(){
    random = Math.floor(Math.random() * 3) +1 //Générer des nombres compris entre 1 et 3
    if(random === 1){ //si random = à 1 :
        choixOrdinateur = "pierre"
    }
    if(random === 2){ //si random = à 1 :
        choixOrdinateur = "feuille"
    }
    if(random === 3){ //si random = à 1 :
        choixOrdinateur = "ciseaux"
    }
    contenantChoixOrdinateur.innerHTML = `<img src="images/${choixOrdinateur}.png">` 
}

// Victoire et Défaite 

function verification(){
    if(choixUtilisateur == choixOrdinateur){
        resultat = "Egalité !";
        contenantResultat.classList.remove("valid","invalid");
        contenantResultat.classList.add("no_color");
    }
    // Le joueur perd
    if(choixUtilisateur == "pierre" && choixOrdinateur == "feuille"){
        resultat = "Perdu !";
        // Ajouter la couleur rouge sur le resultat quand le joueur est perdant
        contenantResultat.classList.remove("valid","no_color");
        contenantResultat.classList.add("invalid");
    }
    if(choixUtilisateur == "feuille" && choixOrdinateur == "ciseaux"){
        resultat = "Perdu !";
        // Ajouter la couleur rouge sur le resultat quand le joueur est perdant
        contenantResultat.classList.remove("valid","no_color");
        contenantResultat.classList.add("invalid");
    }
    if(choixUtilisateur == "ciseaux" && choixOrdinateur == "pierre"){
        resultat = "Perdu !";
        // Ajouter la couleur rouge sur le resultat quand le joueur est perdant
        contenantResultat.classList.remove("valid","no_color");
        contenantResultat.classList.add("invalid");
    }

    // Le joueur gagne

    if(choixUtilisateur == "pierre" && choixOrdinateur == "ciseaux"){
        resultat = "Gagné !";
        // Ajouter la couleur verte sur le resultat quand le joueur est gagnant
        contenantResultat.classList.remove("invalid","no_color");
        contenantResultat.classList.add("valid");
    }
    if(choixUtilisateur == "ciseaux" && choixOrdinateur == "feuille"){
        resultat = "Gagné !";
        // Ajouter la couleur verte sur le resultat quand le joueur est gagnant
        contenantResultat.classList.remove("invalid","no_color");
        contenantResultat.classList.add("valid");
    }
    if(choixUtilisateur == "feuille" && choixOrdinateur == "pierre"){
        resultat = "Gagné !";
        // Ajouter la couleur verte sur le resultat quand le joueur est gagnant
        contenantResultat.classList.remove("invalid","no_color");
        contenantResultat.classList.add("valid");
    }
    contenantResultat.innerHTML = resultat;
}

// Reinitialiser le jeux

function resetValues(){
    contenantChoixUtilisateur.innerHTML = "";
    contenantChoixOrdinateur.innerHTML = "" ;
    contenantResultat.innerHTML = "";
}
