//This is just a function call to get a JSON
//content of JSON is parse and given back as data
//.getJson => returns a promise  it is making the request
//once a promise is called, it runs the function once a response is recevied, once it is done it then runs the next function
//.then will run the promise after the function is completed.
//used when a request depends on another request

var renderSearchResult = function(item){
	return '<p>' + item.snippet.channelTitle + '</p>';
};

$(document).ready(function(){

	$('#search-term').on('submit', function(eventObject){
		eventObject.preventDefault();
		var searchQuery = $('#query').val();
		var searchYouTube = $.getJSON('https://www.googleapis.com/youtube/v3/search', {
			part: 'snippet',
			key: 'AIzaSyCX9ZTK48f0vQ5_iPDc1yK37ADI5IUQpmw',
			q: searchQuery
		});

		searchYouTube.then(function(data){
			$('#response').empty();
			$.each(data.items, function(index, item){
				$('#response').append(renderSearchResult(item));
			});

			console.log(data);
			
		});
	});
});
	