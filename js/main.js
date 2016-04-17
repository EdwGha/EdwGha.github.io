function askQuestions(){

			var firstName = prompt('What is your firstName?');
			var lastName = prompt('What is your lastName?');
			var fullName = firstName + '' + lastName;

			var age = prompt('How old are you?');
			age = parseInt(age);

			{

			if (firstName.toLowerCase()=== 'general' && lastName.toLowerCase() !== 'assembly') {

				console.log ('hello General - hahah.');
			} } 


			console.log('Name is ' + firstName)

			var faveColor = prompt('What is your favourite colour?').toLowerCase();

			if (faveColor === 'red' ||
				faveColor === 'blue' ||
				faveColor === 'green' ||
				faveColor === 'yellow') {

			$('h1').css(

				'color', faveColor);
			}
}

// When the page loads 
$(function () {

	$('img').on('click', askQuestions);

	// Hide all the content
	$('h3').next().hide();

	// When the user clicks an h3
     $('h3').on('click', function(){

// Hide the content]

$('h3').next().slideUp(500);

  	// Toggle the next element   	
     $(this).next().slideToggle(500);

     });

});