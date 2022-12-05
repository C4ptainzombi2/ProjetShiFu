// Choix random de l'ordinateur
let gameArr = ["sniper", "shotgun", "riflegun"]
let gameArrs;
let getComputerSelection = () => gameArr[Math.floor(Math.random() * gameArr.length) ];
// Score du joueur (non utilisée actuellement)

// Récupération des bouton que le joueur selectionne
let sniper_btn = document.querySelector('#sniper');
let shotgun_btn = document.querySelector('#shotgun');
let riflegun_btn = document.querySelector('#riflegun');
let btns = document.querySelectorAll('.buttonPlayer');
// Récupération des boutons du monster (indisponible pour le joueur)
let btnsM = document.querySelectorAll('.btn-Monster')
let sniperm_btn = document.querySelector('#sniperm');
let shotgunm_btn = document.querySelector('#shotgunm');
let riflegunm_btn = document.querySelector('#riflegunm');

// Récupération des différentes div pour le match
let resultsDiv = document.querySelector('#results');
let matchResultDisplay = document.querySelector('.match-result-display');
let playerScoreDisplay = document.querySelector('.player-score-display');
let cpuScoreDisplay = document.querySelector('.cpu-score-display');
let selectionsDisplay = document.querySelector('.selections-display');
let matchScoreDisplay = document.querySelector('.match-score-display');
// Récupération de la div game result qui n'est pas visible en début de partie uniquement à la fin
let gameResultDiv = document.querySelector('.game-result-div');
let gameResult = document.querySelector('.game-result');
let gameFinalScore = document.querySelector('.game-final-score');
let gameResultWrapper = document.querySelector('.game-result-wrapper')
let rematchBtn = document.querySelector('.rematch-btn');
// Définitions de la vie du joueur et du Monstre (100HP) et récupération des bars de vies
let playerlife = 100;
let cpuhealth = 100;
let cpuBar = document.getElementById('computerhealth')
let playerBar = document.getElementById('playerhealth')
// Je récupère mon bouton pour le pseudo du joueur
let nameplayerp = document.getElementById('playername')
let inputplayer = document.getElementById('username')
let btnplayer = document.getElementById('validate')

let calcul ;
let playercharacters = document.getElementById('Playercharacters')
let femaleShoot = document.getElementById('femaleShootSniper')
let blood = document.getElementById('sang')
let victorynumber = document.getElementById('victoryNumber')
let looseNumber = document.getElementById('looseNumber')
let ScoresP = document.getElementById('PlayersScores')
let ScoresM = document.getElementById('MonsterScores')
if (window.localStorage.getItem('test')) {
  var players = JSON.parse(window.localStorage.getItem('test'))
} else {
  var players = { pseudo : `Pseudo`,
             victoire : 0,
             defaite : 0 }
}
btnplayer.addEventListener('click', (e) => {
  e.preventDefault(true)
  playerScore = 0
  cpuScore = 0
  players = {pseudo : `${inputplayer.value}`,
             victoire : `${playerScore}`,
             defaite : `${cpuScore}`}
  currentplayer = inputplayer.value
  ScoresP.textContent = playerScore
  ScoresM.textContent = cpuScore
  modal.style.display = "none";
})


// Ici la fonction rejoué qui recharge la page 


let replayGame = () => {
  window.localStorage.removeItem('test')
  window.localStorage.setItem('test', JSON.stringify(players))
  window.location.reload(true);
 
}
    let currentplayer = players.pseudo 
    let playerScore = players.victoire
    let cpuScore = players.defaite
    console.log(playerScore)
    console.log(cpuScore)
    ScoresP.textContent = playerScore
    ScoresM.textContent = cpuScore
// Ici se trouve ma fonction global qui permet de joué
let playRound = (playerSelection, cpuSelection) => {  

  playerSelection = playerSelection.target.name
  cpuSelection = getComputerSelection();
  console.log(playerSelection);
  console.log(cpuSelection);
  // 1er if else qui dit que si la selection du joueur et différente de cellle de l'ordinateur alors on effectue la fonction sinon on affiche deux balle qui s'entrechoque
      if (cpuSelection == sniperm_btn.name ){
        sniperm_btn.classList.add('buttonMonsterHover')
      setTimeout(() => {
        sniperm_btn.classList.remove('buttonMonsterHover')
      }, 500);
    } else if (cpuSelection == riflegunm_btn.name) {
      riflegunm_btn.classList.add('buttonMonsterHover')
      setTimeout(() => {
        riflegunm_btn.classList.remove('buttonMonsterHover')
      }, 500);
    } else if (cpuSelection == shotgunm_btn.name ){
      shotgunm_btn.classList.add('buttonMonsterHover')
      setTimeout(() => {
        shotgunm_btn.classList.remove('buttonMonsterHover')
      }, 500);
    }
  if (playerSelection !== cpuSelection) {
        // 2ème conditions qui définis les armes qui gagne contre celle qui perdent
      if (playerSelection === "sniper" && cpuSelection === "riflegun" ||
          playerSelection === "riflegun" && cpuSelection === "shotgun" ||
          playerSelection === "shotgun" && cpuSelection === "sniper"){
            cpuhealth = cpuhealth - 10 ;
            cpuBar.style.width = cpuhealth + '%';
            playercharacters.classList.add('playerCharacterFemaleShoot')
            femaleShoot.classList.add('playerCharacterFemaleShoot2')
            setTimeout(() => {
              playercharacters.classList.remove('playerCharacterFemaleShoot')
              femaleShoot.classList.remove('playerCharacterFemaleShoot2')
            }, 1500);
            matchResultDisplay.textContent = `Tu as mis une balle au Monstre`
            cpuBar.firstChild.innerHTML =  'CPU :' + cpuhealth +  `/` + 100 ;
            // Une autre sous conditions pour les perte du joueur
          } else if(playerSelection === "sniper" && cpuSelection === "shotgun" ||
                    playerSelection === "riflegun" && cpuSelection === "sniper" ||
                    playerSelection === "shotgun" && cpuSelection === "riflegun") {
                playerlife = playerlife - 10 ;
                if (playerlife < 30 ) {
                  blood.classList.add('firstplan')
                  playercharacters.src = './public/assets/img/femme30hp.png'
                }
                playerBar.style.width = `${playerlife}`+ '%'
                playerBar.firstChild.innerHTML = `${currentplayer}` + ' ' + playerlife +  `/` + 100 ;
                matchResultDisplay.textContent = `Tu as pris une balle! `
          }
          // Une conditions pour l'égalité
              matchResultDisplay.textContent = `Vous avez la meme armes (aucun degats subits) ! `
            }
            // Ici sont les conditions de fin de partie soit le joueur à 0HP ou le Monstre et ensuite on affiche la div caché
    if(cpuhealth === 0 ){
      gameResultDiv.style.display = 'flex';
      gameResultWrapper.classList.add('victory');
      gameResult.textContent = `Victoire`
      gameFinalScore.textContent = `vie du joueur: ${playerlife} vie de l'Ordinateur: ${cpuhealth}`
     players.victoire++
    } else if (playerlife === 0 ) {
      playercharacters.src = './public/assets/img/femme0HP.png'
      players.defaite++
      gameResultDiv.style.display = 'flex';
      gameResultWrapper.classList.add('loose')
      gameResult.textContent = `Loosers...`
      gameFinalScore.textContent = `vie du joueur: ${playerlife} vie de l'Ordinateur: ${cpuhealth}`
   }
    return
  }
  // Ici se trouve mes event listener sur les bouton qui permettent de lancez la partie
btns.forEach(btn => {
 if(playerlife === 0 || cpuhealth === 0) {
    btn.removeEventListener('click', playRound)
  }else{
    btn.addEventListener('click', playRound)};
})
rematchBtn.addEventListener('click', replayGame)


// test modal
let openModal = document.getElementById('openModal')

function closeModal() {
  var modal = document.getElementById('modal');
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}
openModal.addEventListener('click' , () => {
  var modal = document.getElementById('modal')
  modal.style.display = "block";
})


// Choix du personnage 