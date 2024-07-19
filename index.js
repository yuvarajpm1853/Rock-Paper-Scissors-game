// variable decalration 
let choice,robot_choice,results;

//  advance level
let score=JSON.parse(localStorage.getItem('score')) || {
    win:0,
    lose:0,
    tie:0
};

// Displays the score
function displayScores()
{
    document.querySelector('.score').innerHTML=`Win: ${score.win} , Lose: ${score.lose} ,   Tie: ${score.tie}`;
}

displayScores();


// Robot chossing 
function robotChoice(){
    let robot=Math.random();
    if(robot>=0 && robot<=1/3){
        robot_choice='rock';
    } else if (robot>=1/3 && robot<=2/3){
        robot_choice='paper';
    }else {
        robot_choice='scissors';
    };
    return robot_choice;
}

// Displays the chosen
let resultsElement=document.querySelector('.results'); 
let chosenElement=document.querySelector('.chosen');
let chosen='';
function displayResults(){
chosenElement.innerHTML=`You  
    <img src="images/${choice}-emoji.png" class="choice-icons">
    <img src="images/${robot_choice}-emoji.png" class="choice-icons"> computer`;
    resultsElement.innerHTML=`${results}`;
}

// find the result
function check_results(value){
    choice=value;
    robot_choice=robotChoice(); 
// output condition
    if (choice===robot_choice){
        results='Game id draw.';
        chosen=`You selected ${choice}. Robot selected ${robot_choice}`;
        score.tie+=1;
    }else if (choice=='rock' && robot_choice=='scissors'){
        results='You Won the Game';
        chosen=`You selected ${choice}. Robot selected ${robot_choice}`;
        score.win+=1;
    } else if (choice=='paper' && robot_choice=='rock'){
        results='You Won the Game';
        chosen=`You selected ${choice}. Robot selected ${robot_choice}`;
        score.win+=1;

    } else if (choice=='scissors' && robot_choice=='paper'){
        results='You Won the Game';
        chosen=`You selected ${choice}. Robot selected ${robot_choice}`;
        score.win+=1;
    }
    else{
        results='You lose the Game';
        chosen=`You selected ${choice}. Robot selected ${robot_choice}`;
        score.lose+=1;
    }
    chosenElement.innerHTML='';
    displayScores();
    displayResults();
    localStorage.setItem('score',JSON.stringify(score));
}

//reset score
function reset_score()
{
    localStorage.removeItem('score');
    score.win=0;score.lose=0;score.tie=0;
    displayScores(); 
    chosenElement.innerHTML='';
    resultsElement.innerHTML='';
    alert('Score resetted');
}

// autoplay feature
let isAutoplaying=false;
let intervalId;
let autoplayElement=document.querySelector('.autoplay');
function autoplay(){
    if(!isAutoplaying){
        intervalId=setInterval(()=>{    
            choice=robotChoice();
            check_results(choice);
        },1000)    ;
        isAutoplaying=true;
        autoplayElement.innerHTML='Stop playing';
    }
    else{
        clearInterval(intervalId);
        isAutoplaying=false;
        autoplayElement.innerHTML='Autoplay';
    }
}
