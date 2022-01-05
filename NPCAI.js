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
    attack = getRandomInt(4);
    switch(attack){
        case(0):
       
        bone_upper.play();
        return 50;
        case(1):
       
        shield_bash.play();
        return 40;
        case(2):
       
        lariat.play();
        return 20;
       
    }
    ReynMiss.play();
    return 0
}
function MeliaMoves(){
    attack = getRandomInt(4);
    switch(attack){
        case(1):
        Flare.play()
        return 120
        //ice move
        case(2):
        Thunder.play()
        return 80
        //Fire move
        case(3):
        BurstEnd.play()
        return 240
        //Lighting move
    }
    MeliaMiss.play();
    return 0;
}
function DunbanMoves(){
    attack = getRandomInt(4);
    switch(attack){
        case(1):
       
        soaringTempets.play();
        return 300
        case(2):
        
        StealStrike.play()
        return 400
        case(3):
        
        WorldlySlash.play();
        return 500

    }
    DunbanMiss.play()
    return 0
}