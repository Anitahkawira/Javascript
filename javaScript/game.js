var questions =[
{
	question: "How many bones does a human dody have",
	answer: 206
},
{
	question: "how old is Madowo",
	answer: 35
},
{
	question: "How many counties does Kenya have",
	answer: 47
},
]

var score = 0;
for(index=0; index < questions.length; index++) {
	var question = questions[index];
	var answer = prompt(question.question);

	if (answer == question.answer){
		score ++;
	}
}
document.write("You got" + score + "questions correct");
