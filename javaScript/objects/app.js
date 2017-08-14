var person ={
	firstname:"Jane",
	lastname:"Doe",
	age:45,
	gender:'Female'
}

$('.person').html('<p>First Name:' + person.firstname + '</p>');
$('.person').append('<p>Last Name:' + person.lastname + '</p>');
$('.person').append('<p>Age:' + person.age + '</p>');
$('.person').append('<p>Gender:' + person.gender + '</p>');