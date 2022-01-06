//Reyn attacks
bone_upper = new Sound("sounds/BoneUpper.wav")
shield_bash = new Sound("sounds/ShieldBash.wav")
lariat = new Sound("sounds/Lariat.wav")
ReynMiss = new Sound("sounds/Reyn_miss.wav")

//Dunban Attacks
soaringTempets = new Sound("sounds/Soaring_tempest.wav")
StealStrike = new Sound("sounds/StealStrike.wav")
WorldlySlash = new Sound("sounds/WorldlySlash.wav")
DunbanMiss = new Sound("sounds/Dunban_miss.wav")

//Melia Attacks

Flare = new Sound("sounds/Fire.wav")
Thunder = new Sound("sounds/Thunder.wav")
BurstEnd = new Sound("sounds/BurstEnd.wav")
MeliaMiss = new Sound("sounds/Melia_miss.wav")
function Sound(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload","auto")
    this.sound.setAttribute("Controls", "none")
    this.sound.style.display = "none"
    document.body.appendChild(this.sound)
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
    this.volume = function(volume_N){
        this.sound.volume = volume_N
    }
}

function getRandomInt(max){
    return Math.floor(Math.random()*max)
}

function reynMoves(){
   // attack = getRandomInt(4);
   attack =3
    switch(attack){
        case(0):
       
        bone_upper.play();
        enemyHit.play();
        playPunchEffect();
        return 50;
        case(1):
       
        shield_bash.play();
        enemyHit.play();
        playPunchEffect();
        return 40;
        
        case(2):
        
        lariat.play();
        enemyHit.play();
        playSlashEffect();
        return 20;
       
    }
    ReynMiss.play();
    playMiss();
    return 0
}

function MeliaMoves(){
    attack = getRandomInt(4);
    switch(attack){
        case(1):
        Flare.play()
        enemyHit.play();
        playFireEffect()
        return 120
        //ice move
        case(2):
        Thunder.play()
        enemyHit.play();
        playLightningEffect();
        return 80
        //Fire move
        case(3):
        BurstEnd.play()
        enemyHit.play();
        playEnergyEffect();
        return 240
        //Lighting move
    }
    MeliaMiss.play();
    playMiss();
    return 0;
}
function DunbanMoves(){
    attack = getRandomInt(4);
    switch(attack){
        case(1):
       
        soaringTempets.play();
        playSlashEffect();
        enemyHit.play();
        return 300

        case(2):
        
        StealStrike.play()
        playPunchEffect();
        enemyHit.play();
        return 400

        case(3):
        WorldlySlash.play();
        playSlashEffect();
        enemyHit.play();
        return 500

    }
    DunbanMiss.play()
    playMiss();
    return 0
}

function playPunchEffect(){
    punchEffect.style.display = "inline"
    setTimeout(function(){
    punchEffect.style.display = "none"

    },1000)
}
function playSlashEffect(){
    slashEffect.style.display = "inline"
    setTimeout(function(){
        slashEffect.style.display = "none"
        },1000)
}
function playFireEffect(){
    fireEffect.style.display = "inline"
    setTimeout(function(){
        fireEffect.style.display = "none"
    },1500)
}
function playLightningEffect(){
    lightningEffect.style.display = "inline"
    setTimeout(function(){
        lightningEffect.style.display= "none"
    },1500)
}
function playEnergyEffect(){
    energyEffect.style.display = "inline"
    setTimeout(function(){
        energyEffect.style.display = "none"
    },2000)
}
