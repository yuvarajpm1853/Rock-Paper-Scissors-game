// variable decalration 

let choice='';
let robot_choice='';

//  advance level
let score=JSON.parse(localStorage.getItem('score')) || {
    win:0,
    lose:0,
    tie:0
};
// Displays the score
function displayscores()
{
    document.querySelector('.score').innerHTML=`Win: ${score.win} ,   Lose: ${score.lose} ,   Tie: ${score.tie}`;
}

displayscores();

// Displays the results
let results='';
function displayResults(){
document.querySelector('.results').innerHTML=`You  
<img src="images/${choice.toLowerCase()}-emoji.png" class="choice-icons">
<img src="images/${robot_choice.toLowerCase()}-emoji.png" class="choice-icons"> computer`;
}


function check_results(chosen){
     choice=chosen;
     // Robot chossing 
    let robot=Math.random();
if(robot>=0 && robot<=1/3){
    robot_choice='Rock';
} else if (robot>=1/3 && robot<=2/3){
    robot_choice='Paper';
}else {
    robot_choice='Scissors';
};
 
// output condition
if (choice===robot_choice){
    results='Game id draw.'
score.tie+=1;
}else if (choice=='Rock' && robot_choice=='Scissors'){
    results=`You selected ${choice}. Robot selected ${robot_choice}.You Won the Game`;
    score.win+=1;
} else if (choice=='Paper' && robot_choice=='Rock'){
    
    results=`You selected ${choice}. Robot selected ${robot_choice}.You Won the Game`;
    score.win+=1;

} else if (choice=='Scissors' && robot_choice=='Paper'){
    results=`You selected ${choice}. Robot selected ${robot_choice}.You Won the Game`;
    score.win+=1;

}
else{
    results=`You selected ${choice}. Robot selected ${robot_choice}.You lose the Game`;
    score.lose+=1;

}
displayscores();
displayResults();
localStorage.setItem('score',JSON.stringify(score));}

//reset score
function reset_score()
{
    localStorage.removeItem('score');
    score.win=0;score.lose=0;score.tie=0;displayscores(); results='';
    document.querySelector('.results').innerHTML=`${results}`;
    alert('Score resetted');
}