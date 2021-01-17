var readlineSync= require('readline-sync');
const chalk = require('chalk');

console.log(chalk.green.bold('😀  Hello Friend!!! \n'));
console.log(chalk.cyanBright('Let us check... How much do you know about me ? \n'));

var userName = readlineSync.question(chalk.cyanBright("Please enter your name - "));

console.log(chalk.red("\nHey!!! "+ userName +"\nGet ready for the QUIZ. \nEnter a/b/c for each question to answer. For each correct answer you will get 2 points."));

var que1 = {
  q : "What is my nickname ? \na. Ashish\nb. Gaurav\nc. Sekhar",
  a : "b"
};

var que2 = {
  q : "What's my fav food in Indore ? \na. Ramesh - MasalaDosa\nb. PFJ - CheeseCornParatha\nc. Domino's Pizza",
  a : "a"
};

var que3 = {
  q : "Where do I work ? \na. WIPRO\nb. TCS\nc. Capegemini",
  a : "b"
};

var que4 = {
  q : "Who is my fav superhero ? \na. THOR\nb. CAPTAIN AMERICA\nc. IRONMAN",
  a : "c"
};

var que5 = {
  q : "Which one is my fav movie of IronMan ? \na. IronMan-1\nb. IronMan-2\nc. IronMan-3",
  a : "c"
};

var que6 = {
  q : "What is my BirthDate ? \na. 08-Jan\nb. 14-Feb\nc. 21-Aug",
  a : "a"
};

var que7 = {
  q : "Which of the following is my HomeTown ? \na. Indore\nb. Bhopal\nc. Rewa",
  a : "c"
};

var que8 = {
  q : "Which is my fav color ? \na. Blue\nb. Black\nc. Red",
  a : "b"
};

var que9 = {
  q : "Which programming language I know better ? \na. JAVA\nb. C\nc. C++",
  a : "a"
};

var que10 = {
  q : "Which web-series do I like the most ? \na. LOVE\nb. MoneyHeist\nc. Mirzapur",
  a : "b"
};

var questions = [que1, que2, que3, que4, que5, que6, que7, que8, que9, que10];

var score = 0;

for(var i=0; i<questions.length; i++){
  calculateScore(i+1, questions[i].q, questions[i].a);
}
console.log(chalk.red('\n💥 FINAL SCORE - ' + score + ' 💥'));

function calculateScore(questionNumber, question, answer){
  var userAns = readlineSync.question(chalk.cyanBright(questionNumber + ') ' + question + "\nYour answer - "));
  if(userAns == answer){
    console.log(chalk.green("Great!! Right Answer🎉"));
      score+=2;
  }else {
    console.log(chalk.green("Oh! no.... It's wrong"));
      score = score;
  }
  
  console.log('✨  Current Score - ' + score + '\n');
}