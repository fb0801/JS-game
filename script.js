var character =
document.getElementById("character");
var block = document.getElementById("block");

function jump(){
    //to access the character and make them jump
    if (character.classList != "animation"){
        character.classList.add('animate');
    }
    setTimeout(function(){
        character.classList.remove("animate"); //remove the jump animation
    },500);


}