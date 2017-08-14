 ;var score ={};
score.maths = prompt("What is your maths score?");
score.maths = parseInt(score.maths);

score.english = prompt("What is your english score?");
score.english = parseInt(score.english);

score.french = prompt("What is your french score?");
score.french = parseInt(score.french);

var total = score.maths + score.english +score.french;
document.write("Total: " + total);