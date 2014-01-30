// Pour jouer contre l'ordinateur 
// 
// Créer une function vsCPU
// joueurs[2] = deviens l'ordinateur 
// quand joueurs[2] joue utiliser (Math.random()*3)+1
// 
// 
// jouer contre l'ordinateur 
// créer un user joueurs[3], faire joueur le 

function $(id) { return document.getElementById(id); }

// Chargement du jeu
function loadGame() {
  var reponse = prompt("Envie de se faire un Téquila's Nouba ?").toLowerCase();;
  if (reponse == "oui") {
    $('infos').innerHTML = "Souvenez-vous la santé c'est votre patrimoine !";
  } else if (reponse == "non"){
    $('infos').innerHTML ="Peut-être une prochaine fois";
  } else {
    $('infos').innerHTML ="T'es déjà bien trop saoul pour jouer, je comprend rien à ce que tu dis !";
  }

  var fire = new Image();
  fire.src = "fire.gif";
  $('allumettesEnJeu').appendChild(fire);

}

// Gestion de l'affichage 
function updateDisplay(){
  for (var i=0;i<$('allumettesEnJeu').innerHTML ;i++) {
    var allumette = new Image();
    allumette.src = "tekila.png";
    $('infos').appendChild(allumette);
  }

  if ($('allumettesEnJeu').innerHTML < 2) {
    $('infos').innerHTML ="<p>" + joueursEnCours + " " + "a vomie sur ses chaussures et déclare forfait ! <br /> <img src=\"vomi.gif\" alt=\vomito\ /> </p>";
  }
}

//Enregistrement des joueurs
function registerGamer() {

  //On stock les noms dans un new Array();
  joueurs = [];
  joueurs[1] = prompt("Quel est ton nom soiffard ?");
  joueurs[2] = prompt("Quel est ton nom ivrogne ?");
  $('infos').innerHTML = "<p> Bonjour" + " " + joueurs[1] + " et " + joueurs[2] + " !" + " <br />Pour commencer la Téquila Nouba, servez des Teq'Paf à boire.</p>";
  joueursOrdinateur = false;
}
//Contre l'ordinateur 
function vsCPU() {
  joueurs = [];
  joueurs[1] = prompt("Quel est ton nom soiffard ?");
  joueurs[2] = "Ordinateur";
  joueursOrdinateur = joueurs[2];
  console.log(joueursOrdinateur)
  $('infos').innerHTML = "<p> Bonjour" + " " + joueurs[1] + " et " + joueurs[2] + " !" + " <br />Pour commencer la Téquila Nouba, servez des Teq'Paf à boire.</p>";

}
//Function aléatoire

function aleatoire(){
  return Math.floor(2*Math.random())+1;
}
function resultOrdinateur() {
  return (Math.random()*3)+1
}
//Initialisation du jeu
function startGame()
{  

  // On prend la valeur du champs input allumettesAuDepart et on la mets dans allumettesEnJeu
  $('allumettesEnJeu').innerHTML = parseInt($('allumettesAuDepart').value);

  // Si la valeur de allumettesEnJeu n'est pas numérique on dit 
  if (isNaN($('allumettesEnJeu').innerHTML)) {
    $('infos').innerHTML ="<p>La valeur doit être numérique </p>";
    return false;   
  }

  // On affiche aléatoirement qui commence 
  startGamer = aleatoire();
  joueursEnCours = joueurs[startGamer];
    if (joueurs[startGamer] == joueursOrdinateur) {
      joueursEnCours = joueurs[1];
    } 
  $('infos').innerHTML = "<p>" + joueursEnCours + "se lance dans l'aventure</p>"
 
  // On laisse commencer l'humain plutôt que l'ordinateur
    

 
  if (joueursEnCours)
    $('infos').innerHTML = "<p>Fais attention à ton foie" + " "+ joueurs[startGamer] + "</p>";

    // On affiche le nombre d'allumette en jeu 
    updateDisplay();
  }

// Suppression d'allumettes
function enleverDesAllumettes(infos)
{
  $('infos').innerHTML = " ";

  // Nombre d'allumettes en jeu
  var allumettesEnJeu = $('allumettesEnJeu').innerHTML;


  // Nombres d'allumettes à enlever
  var allumettesEnMoins = $('allumettesEnMoins').value;
  if(joueursEnCours == joueursOrdinateur) {
  allumettesEnMoins = resultOrdinateur().value;
  }

  if (allumettesEnMoins>3 || allumettesEnMoins<1) {
    $('infos').innerHTML = "<p>Fais pas ton rigolo, tu dois boire au minimum 1 Teq'Paf au plus 3 Teq'Paf</p>";
    allumettesEnMoins=0;
  }


  


  // On change le joueur en cours 
  if (joueursEnCours == joueurs[1]) {
    joueursEnCours = joueurs[2];
  } else { 
    joueursEnCours = joueurs[1];
  }

  $('infos').innerHTML = "<p> A toi de boire" + " " + joueursEnCours + "</p>";

  // Nouveau nombre d'allumettes en jeu
  var allumettesEnJeuNouveau = allumettesEnJeu - allumettesEnMoins;

  // On affiche le nouveau nombre d'allumettes
  $('allumettesEnJeu').innerHTML = allumettesEnJeuNouveau;
  if (allumettesEnMoins>3 || allumettesEnMoins<1) {
    $('infos').innerHTML = "<p>Fais pas ton rigolo, tu dois boire au minimum 1 Teq'Paf au plus 3 Teq'Paf</p>";
    allumettesEnMoins=0;
  }

  updateDisplay();

}
