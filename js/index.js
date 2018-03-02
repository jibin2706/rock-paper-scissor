const choices = ['rock', 'paper', 'scissor'];
let computerScore = 0,
    userScore = 0;

const buttons = document.getElementsByClassName('button');
console.log(buttons);
for (button of buttons) {
    button.addEventListener('click', function () {
        calculate(this.id, computerChoice());
    })
};

const computerChoice = () => choices[Math.floor(Math.random() * 3)];

function calculate(userChoice, cpuChoice) {
    if (userChoice == cpuChoice)
        0;
    if (userChoice == "rock" && cpuChoice == "paper")
        computerScore++;
    if (userChoice == "rock" && cpuChoice == "scissor")
        userScore++;
    if (userChoice == "paper" && cpuChoice == "scissor")
        computerScore++;
    if (userChoice == "paper" && cpuChoice == "rock")
        userScore++;
    if (userChoice == "scissor" && cpuChoice == "rock")
        computerScore++;
    if (userChoice == "scissor" && cpuChoice == "paper")
        userScore++;

    displayScore(userChoice, cpuChoice);
    console.log(userChoice, cpuChoice);
    console.log(userScore, computerScore);
}

function displayScore(userChoice, cpuChoice) {
    document.getElementById("cpuscore").innerText = computerScore;
    document.getElementById("playerscore").innerText = userScore;
    document.getElementById("cpuchoice").innerText = cpuChoice;
    document.getElementById("userchoice").innerText = userChoice;
    if (userScore == 5 || computerScore == 5) {
        if (userScore == 5)
            document.getElementById("winner").innerHTML = '<p style="color:green">You Won</p>';
        else
            document.getElementById("winner").innerHTML = '<p style="color:red">You Lost</p>';
        setTimeout(function () {
            location.reload(1);
        }, 5000);
    }
}


// TODO: displayImage