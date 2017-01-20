// Answer the questions here:

// - What do you think is going to happen?
// Delegated button will console.log the name of the button.
// - What happened?
//The button was correctly logged to the console.
// - Why?
//Because the click delegated the function to the newly created button
//========== Write your code below ===========//
$(document).ready(function () {
    //fs1
    $('#list').on('click','button', function () {
        console.log($(this).text() + " was clicked.");
    });
    //fs2
    var new_button = $("<li><button style='margin-top: 10px'>Delegated Button#5 Handler</button></li>");
    $('#list').append(new_button);
    //fs3
    $('#list').on('click', 'li:last-child button', function () {
       console.log('Newest button that was added was clicked.');
    })
    //additional challenge
    var google_button = $("<li><button class='google' style='margin-top: 10px'><a style='text-decoration: none' target='_blank' href='https:www.google.com'> Go to Google</a></button></li>");
    $('#list').append(google_button);
    $('#list').on('click', 'button[class=google]', function(){
        console.log('Buttons with class \'google\' was clicked');
    })
});
