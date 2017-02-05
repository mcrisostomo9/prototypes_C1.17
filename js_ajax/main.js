//Create GLOBAL variable below here on line 2
global_result = null;

$(document).ready(function(){
    $('button').click(function(){
        console.log('click initiated');
        $.ajax({
            dataType: 'json',
            url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
            success: function(result) {
                console.log('AJAX Success function called, with the following result:', result);
                global_result = result.feed.entry;
                for(i=0;i < global_result.length-1; i++){
                    var movies_pic = global_result[i]['im:image'][2].label;
                    var movie_title = global_result[i]['im:name'].label;
                    var movie_director = global_result[i]['im:artist'].label;
                    $('<img>').attr('src', movies_pic).appendTo('#main');
                    $('<h4>').text(movie_title).appendTo('#main');
                    $('<p>').text('Directed by: ' + movie_director).appendTo('#main');
                }
            }
        });
        console.log('End of click function');
    });
});