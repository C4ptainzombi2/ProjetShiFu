let gameArrs,calcul,gameArr=["sniper","shotgun","riflegun"],getComputerSelection=()=>gameArr[Math.floor(Math.random()*gameArr.length)],sniper_btn=document.querySelector("#sniper"),shotgun_btn=document.querySelector("#shotgun"),riflegun_btn=document.querySelector("#riflegun"),btns=document.querySelectorAll(".buttonPlayer"),btnsM=document.querySelectorAll(".btn-Monster"),sniperm_btn=document.querySelector("#sniperm"),shotgunm_btn=document.querySelector("#shotgunm"),riflegunm_btn=document.querySelector("#riflegunm"),resultsDiv=document.querySelector("#results"),matchResultDisplay=document.querySelector(".match-result-display"),playerScoreDisplay=document.querySelector(".player-score-display"),cpuScoreDisplay=document.querySelector(".cpu-score-display"),selectionsDisplay=document.querySelector(".selections-display"),matchScoreDisplay=document.querySelector(".match-score-display"),gameResultDiv=document.querySelector(".game-result-div"),gameResult=document.querySelector(".game-result"),gameFinalScore=document.querySelector(".game-final-score"),gameResultWrapper=document.querySelector(".game-result-wrapper"),rematchBtn=document.querySelector(".rematch-btn"),playerlife=100,cpuhealth=100,cpuBar=document.getElementById("computerhealth"),playerBar=document.getElementById("playerhealth"),nameplayerp=document.getElementById("playername"),inputplayer=document.getElementById("username"),btnplayer=document.getElementById("validate"),playercharacters=document.getElementById("Playercharacters"),femaleShoot=document.getElementById("femaleShootSniper"),bulletp=document.getElementById("bulletp"),bulletm=document.getElementById("bulletm"),blood=document.getElementById("sang"),victorynumber=document.getElementById("victoryNumber"),looseNumber=document.getElementById("looseNumber"),ScoresP=document.getElementById("PlayersScores"),ScoresM=document.getElementById("MonsterScores");if(!0==JSON.parse(window.localStorage.getItem("test",players)));else{players={pseudo:`Pseudo`,victoire:0,defaite:0};var players=window.localStorage.getItem("test",JSON.stringify(players))}btnplayer.addEventListener("click",a=>{a.preventDefault(!0),playerScore=0,cpuScore=0,players={pseudo:`${inputplayer.value}`,victoire:`${playerScore}`,defaite:`${cpuScore}`},currentplayer=inputplayer.value,ScoresP.textContent=playerScore,ScoresM.textContent=cpuScore,modal.style.display="none"});let replayGame=()=>{window.localStorage.removeItem("test"),window.localStorage.setItem("test",JSON.stringify(players)),window.location.reload(!0)},test=localStorage.getItem("test");players=JSON.parse(test),currentplayer=`${players.pseudo}`;let playerScore=players.victoire,cpuScore=players.defaite;ScoresP.textContent=playerScore,ScoresM.textContent=cpuScore;let playRound=(a,b)=>(a=a.target.name,b=getComputerSelection(),console.log(a),console.log(b),b==sniperm_btn.name?(sniperm_btn.classList.add("buttonMonsterHover"),setTimeout(()=>{sniperm_btn.classList.remove("buttonMonsterHover")},500)):b==riflegunm_btn.name?(riflegunm_btn.classList.add("buttonMonsterHover"),setTimeout(()=>{riflegunm_btn.classList.remove("buttonMonsterHover")},500)):b==shotgunm_btn.name&&(shotgunm_btn.classList.add("buttonMonsterHover"),setTimeout(()=>{shotgunm_btn.classList.remove("buttonMonsterHover")},500)),a===b?(bulletm.classList.add("egalityBulletM"),bulletp.classList.add("egalityBulletP"),setTimeout(()=>{bulletm.classList.remove("egalityBulletM"),bulletp.classList.remove("egalityBulletP")},1500),matchResultDisplay.textContent=`Vous avez la meme armes (aucun degats subits) ! `):"sniper"===a&&"riflegun"===b||"riflegun"===a&&"shotgun"===b||"shotgun"===a&&"sniper"===b?(cpuhealth-=10,cpuBar.style.width=cpuhealth+"%",playercharacters.classList.add("playerCharacterFemaleShoot"),femaleShoot.classList.add("playerCharacterFemaleShoot2"),bulletp.classList.add("bulletTransitionPlayer"),setTimeout(()=>{bulletp.classList.remove("bulletTransitionPlayer"),playercharacters.classList.remove("playerCharacterFemaleShoot"),femaleShoot.classList.remove("playerCharacterFemaleShoot2")},1500),matchResultDisplay.textContent=`Tu as mis une balle au Monstre`,cpuBar.firstChild.innerHTML="CPU :"+cpuhealth+`/`+100):("sniper"===a&&"shotgun"===b||"riflegun"===a&&"sniper"===b||"shotgun"===a&&"riflegun"===b)&&(playerlife-=10,30>playerlife&&(blood.classList.add("firstplan"),playercharacters.src="./public/assets/img/femme30hp.png"),bulletm.classList.add("bulletTransitionMonster"),setTimeout(()=>{bulletm.classList.remove("bulletTransitionMonster")},1500),playerBar.style.width=`${playerlife}`+"%",playerBar.firstChild.innerHTML=`${currentplayer}`+" "+playerlife+`/`+100,matchResultDisplay.textContent=`Tu as pris une balle! `),void(0===cpuhealth?(gameResultDiv.style.display="flex",gameResultWrapper.classList.add("victory"),gameResult.textContent=`Victoire`,gameFinalScore.textContent=`vie du joueur: ${playerlife} vie de l'Ordinateur: ${cpuhealth}`,bulletm.classList.remove("firstplan"),players.victoire++):0===playerlife&&(playercharacters.src="./public/assets/img/femme0HP.png",players.defaite++,gameResultDiv.style.display="flex",gameResultWrapper.classList.add("loose"),gameResult.textContent=`Loosers...`,gameFinalScore.textContent=`vie du joueur: ${playerlife} vie de l'Ordinateur: ${cpuhealth}`,bulletm.classList.remove("firstplan"))));btns.forEach(a=>{0===playerlife||0===cpuhealth?a.removeEventListener("click",playRound):a.addEventListener("click",playRound)}),rematchBtn.addEventListener("click",replayGame);let openModal=document.getElementById("openModal");function closeModal(){var a=document.getElementById("modal");a.style.display="none"}window.onclick=function(a){a.target==modal&&(modal.style.display="none")},openModal.addEventListener("click",()=>{var a=document.getElementById("modal");a.style.display="block"});