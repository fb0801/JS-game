const scoreDisplay = document.querySelector('span') // get our span element where we will put the score
let score = 0;

var character =
document.getElementById("character");
var block = document.getElementById("block");

function jump(){
    //to access the character and make them jump

    //if statement to prevent the user from spamming the jump button
    if (character.classList != "animation"){
        character.classList.add('animate');
        score++
            scoreDisplay.textContent = score //display the new score
    }
    setTimeout(function(){
        character.classList.remove("animate"); //remove the jump animation
    },500);


}

//check if the user has hit the block to end the game
var checkDead = setInterval(function(){
    var characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue('top'));

        var blockLeft = 
        parseInt(window.getComputedStyle(block).getPropertyValue('left'));
        if(blockLeft < 20 && blockLeft > 0 && characterTop >=130){
            block.style.animation = "none";
            block.style.display = "none";
            alert("You lose");
        } 
            
        
    
},10);